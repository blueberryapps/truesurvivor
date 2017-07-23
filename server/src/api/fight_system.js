import GameState from '../store/game';
import { toJS, autorun } from 'mobx';

export default ({
  global_store,
  // local_store,
  socket,
  room,
  p1,
  p2,
  my_cid
}) => {
  const game_state = new GameState({ p1, p2 })
	const dis = autorun(() => socket.to(room).emit('game_state_update', toJS(game_state)))

  socket.on('skill', action => {
    game_state.perform_skill(action, my_cid)
    const winner = game_state.is_winner();
    if (winner) {
      dis();
      socket.to(room).emit('game_result', { win: winner === my_cid })
      socket.leave(room)
      if (my_cid === winner) {
        global_store.level_up(my_cid)
      }
    } else {
      game_state.switch_turn()
    }
  })
}
