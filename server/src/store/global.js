
import { observable, action, computed, toJS } from 'mobx';
import cuid from 'cuid'

class GlobalStore {
  @observable characters = new Map()

  @action.bound create_character(uid) {
    const character_id = cuid()
    this.characters.set(character_id, { uid, cid: character_id })
  }

  @action.bound level_up(cid) {
    const old_character = this.characters.get(cid)
    this.characters.set(cid, {
      ...old_character,
      ss: old_character.ss + 1
    })
  }

  @action.bound find_fighter(cid) {
    const self = this;
    const enemy = this.characters
      .values()
      .filter(({ status }) => status !== 'ready')
      .find(({ cid: id }) => cid !== id)

      if (enemy) {
        return Promise.resolve(enemy)
      }
      return new Promise((res, rej) => {
        const i = setInterval(() => {
          const enemy = self.find_fighter(cid)
          if (enemy) {
            res(enemy);
            clearInterval(i);
          }
        }, 10000);
      });
    }

  @action.bound uid_exists(uid) {
    const matched = this.characters
      .values()
      .find(({ uid: id }) => id === uid)

    return !matched
  }

  @action.bound update_character(uid, character_info) {
    const cid = this.get_cid(uid);
    const my_character = this.characters.get(cid);
    return this.characters.set(cid, {
      timestamp: Date.now(),
      ss: 1,
      health: 100,
      stamina: 100,
      status: 'idle',
      ...my_character,
      ...character_info,
    })
  }

  @action.bound get_character_by_uid(uid) {
    const cid = this.get_cid(uid);
    return this.characters.get(cid);
  }

  @action.bound get_character_by_cid(cid) {
    return this.characters.get(cid);
  }

  @action.bound set_status(cid, status) {
    this.characters.set(cid, {
      ...this.characters.get(cid),
      status
    })
  }
  get_cid(uid) {
    const character = this.characters
      .values()
      .find(({ uid: id }) => id === uid)
    return character ? character.cid : null;
  }

}

export default GlobalStore;
