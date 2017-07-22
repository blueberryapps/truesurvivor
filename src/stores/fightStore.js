import { observable, action } from 'mobx'

class FightStore {
  @observable attackerHealth = 100
  @observable attackerStamina = 100
  @observable defenderHealth = 100
  @observable defenderStamina = 100
  @action damageAttacker(healthDrop) {
    this.attackerHealth -= healthDrop
  }
}

export default function createStore() {
  return new FightStore()
}
