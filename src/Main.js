import React from 'react'
import { observer, Provider } from 'mobx-react'

import Routing from './routes'
import Loading from './scenes/Loading'
import createStores from './stores'

const stores = createStores()

function Main() {
  if (stores.preloadStore.loading) {
    return <Loading />
  }

  return (
    <Provider {...stores}>
      <Routing />
    </Provider>
  )
}

console.ignoredYellowBox = [
  'Setting a timer',
  'Remote debugger',
  'FIREBASE WARNING: Using an unspecified index',
]

export default observer(Main)
