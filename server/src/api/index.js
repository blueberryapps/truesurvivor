import { reaction } from 'mobx';
import LocalStore from '../store/local'
import cuid from 'cuid'
import EventEmitter from 'events';
import fight_system from './fight_system'

export function Auth({ socket, global_store }) {
    socket.on('auth', (uid) => {
      if (!global_store.uid_exists(uid)) {
				const cid = global_store.create_character(uid)
				global_store.set_session({ my_cid: cid, my_uid: uid })
			} else {
				const { cid } = global_store.get_character_by_uid(uid)
				global_store.set_session({ my_cid: cid, my_uid: uid })
			}
    })
}

export function Character({ store, socket }) {
	socket.on('update_character', (character_info) => {
		store.update_character(character_info)
	})
}

export function Fight({ local_store, global_store, socket }) {
	socket.on('find_fight', () => {
		const {my_cid} = local_store.get_session();
		const event_emitter = new EventEmitter()
		global_store.set_status(my_cid, 'ready')

		const lookup = global_store
			.find_fighter(my_cid)
			.then((enemy) => {
				const room = cuid();
				event_emitter.emit(`${enemy.cid}-join`, { room, p1_cid: my_cid, p2_cid: enemy.cid })
				event_emitter.emit(`${my_cid.cid}-join`, { room, p1_cid: my_cid, p2_cid: enemy.cid })
			})

		event_emitter.on(`${my_cid}-join`, ({ room, p1_cid, p2_cid }) => {
			lookup.cancel();
			global_store.set_status(my_cid, 'fighting');
			socket.join(room);
			const p1 = global_store.get_character_by_cid(p1_cid)
			const p2 = global_store.get_character_by_cid(p2_cid)

			fight_system({
				global_store,
				local_store,
				socket,
				room,
				p1,
				p2,
				my_cid
			});
		})
	})

}

// function State({ global_store, socket }) {
// 	reaction(
// 		() => global_store.characters,
// 		({ characters }) =>
// 			socket.emit('characters_update', characters)
// 	)
// }

export default (deps) => {
		const { io } = deps;

		io.on('connection', socket => {
			const local_store = new LocalStore();
			console.log(`Connection acquired. ${socket.id}`);
			socket.emit('ok')

			// handlers
			// State({})
			Fight({ ...deps, socket, local_store })
			Auth({ ...deps, socket, local_store })
			Character({ ...deps, socket, local_store });

			socket.on('disconnect', () => {
				// clear_all()
			})
		})
}
