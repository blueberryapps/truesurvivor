import React from 'react'
import { Provider } from 'mobx-react'

import Routing from './routes'

import createStores from './stores'

const stores = createStores()


export default function Main() {

  return (
    <Provider {...stores}>
      <Routing />
    </Provider>
  )
}
