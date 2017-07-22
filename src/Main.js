import React from 'react'
import { Provider } from 'mobx-react'

import FightScene from './scenes/FightScene'

import createStores from './stores'

const stores = createStores()

export default function Main() {
  return (
    <Provider {...stores}>
      <FightScene />
    </Provider>
  )
}
