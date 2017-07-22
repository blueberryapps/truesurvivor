import { observable, action } from 'mobx'

import Fighter from '../core/Fighter'
import WhiteHat from '../factions/WhiteHat'

export class FightStore {
  @observable attacker = new Fighter(WhiteHat({ name: 'Kung Fury' }))
  @observable defender = new Fighter(WhiteHat({ name: 'Hackerman' }))
  useSkill(fighter, skill) {
    skill.execute(this, fighter)
  }
}

export default function createStore() {
  return new FightStore()
}
