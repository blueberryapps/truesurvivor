import { enableLogging } from 'mobx-logger'

import createAuthStore from './authStore'
import createFightStore from './fightStore'
import createCharacterStore from './characterStore'
import createPreloadStore from './preloadStore'

enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
})

function createStores() {
  const authStore = createAuthStore()
  const preloadStore = createPreloadStore({ authStore })
  const fightStore = createFightStore()
  const characterStore = createCharacterStore({ authStore })

  return {
    preloadStore,
    authStore,
    fightStore,
    characterStore
  }
}

export default createStores
