// @flow
import { observable, action, computed, autorun, when } from 'mobx'
import { Actions } from 'react-native-router-flux'

import signInToFirebase, { currentUser, signOut } from '../core/Auth'

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
  @action.bound logout() {
    signOut()
    Actions.auth()
  }
}

export default function createStore() {
  const authStore = new AuthStore()

  const disposeRedirect = autorun('auth redirection', () => {
    if (authStore.isInitializing) {
      return
    }
    if (authStore.isAuthenticated) {
      Actions.menu()
      disposeRedirect()
    } else {
      Actions.auth()
    }
  })

  const dispose = autorun(() => {
    if (!authStore.isInitializing && authStore.isAuthenticating) {
      console.log('execute authentication')
      signInToFirebase().catch(authStore.cancelAuthentication)
    }
  })

  dispose.onError(console.error)

  return authStore
}
