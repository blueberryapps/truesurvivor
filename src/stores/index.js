import { enableLogging } from 'mobx-logger'

import createAuthStore from './authStore'
import createFightStore from './fightStore'

enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
})

function createStores() {
  const authStore = createAuthStore()
  const fightStore = createFightStore()

  return {
    authStore,
    fightStore,
  }
}

export default createStores
