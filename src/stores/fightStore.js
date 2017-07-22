import { observable, action } from 'mobx'

import Fighter from '../core/Fighter'
import WhiteHat from '../factions/WhiteHat'

export class FightStore {
  @observable attacker = new Fighter({ name: 'Kung Fury', faction: WhiteHat() })
  @observable defender = new Fighter({ name: 'Hackerman', faction: WhiteHat() })
  activateSkill = fighter => action.bound((skill) => {
    skill.execute(this, fighter)
  })
}

export default function createStore() {
  return new FightStore()
}
