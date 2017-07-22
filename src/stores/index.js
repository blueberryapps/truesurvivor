import { enableLogging } from 'mobx-logger'

import createAuthStore from './authStore'
import createFightStore from './fightStore'

enableLogging({
  predicate: () => true,
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
