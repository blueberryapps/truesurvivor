// @flow
import { observable, action, computed, autorun, when } from 'mobx'
import { Actions } from 'react-native-router-flux'

import signInToFirebase, { currentUser } from '../core/Auth'

export class AuthStore {
  @observable isAuthenticating = false
  // eslint-disable-next-line class-methods-use-this
  @computed get user(): ?FirebaseUser {
    return currentUser.get()
  }
  @computed get isInitializing(): boolean {
    return this.user === undefined
  }
  @computed get isAuthenticated(): boolean {
    return Boolean(this.user)
  }
  @action.bound authenticate() {
    this.isAuthenticating = true
  }
  @action.bound cancelAuthentication() {
    this.isAuthenticating = false
  }
}

export default function createStore() {
  const authStore = new AuthStore()

  when(
    () => authStore.isAuthenticated,
    () => Actions.menu(),
  )

  const dispose = autorun('execute authentication', () => {
    if (!authStore.isInitializing && authStore.isAuthenticating) {
      signInToFirebase().catch(authStore.cancelAuthentication)
    }
  })

  dispose.onError(console.error)

  return authStore
}
