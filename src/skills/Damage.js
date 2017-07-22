// @flow
import { observable, action } from 'mobx'

import type { FightStore } from '../stores/fightStore'

class Damage {
  @observable damageImpact = 1
  @action.bound execute(fight: FightStore) {
    fight.defender.damage(this.damageImpact)
  }
}

export default Damage
