import { observable } from 'mobx'

import Fighter from '../core/Fighter'
import WhiteHat from '../factions/WhiteHat'

export class FightStore {
  @observable attacker = new Fighter(WhiteHat({ name: 'Kung Fury' }))
  @observable defender = new Fighter(WhiteHat({ name: 'Hackerman' }))
}

export default function createStore() {
  return new FightStore()
}
