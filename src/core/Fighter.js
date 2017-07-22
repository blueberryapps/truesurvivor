import { observable, action } from 'mobx'

class Fighter {
  constructor(character) {
    this.character = character
  }
  @observable character = null
  @observable health = 100
  @observable stamina = 100
  @action.bound damage(healthDrop) {
    this.health -= healthDrop
  }
  @action.bound tire(staminaDrop) {
    this.stamina -= staminaDrop
  }
}

export default Fighter
