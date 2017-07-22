import { enableLogging } from 'mobx-logger'

import createFightStore from './fightStore'

enableLogging({
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
})

function createStores() {
  const fightStore = createFightStore()

  return {
    fightStore,
  }
}

export default createStores
