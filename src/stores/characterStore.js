// @flow
import { observable, action, when } from 'mobx'

export class CharacterStore {
  @observable userName = ''
  @observable userFaction = 'whiteHat'
  @action.bound changeName(value) {
    this.userName = value
  }
  @action.bound changeFaction(value) {
    this.userFaction = value
  }
}

export default function createStore({ authStore }) {
  const characterStore = new CharacterStore()
  when(
    () => authStore.isAuthenticated,
    () => { characterStore.userName = authStore.user.displayName }
  )
  return characterStore
}
