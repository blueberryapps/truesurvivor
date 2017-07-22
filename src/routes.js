import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import MenuScene from './scenes/MenuScene'
import FightScene from './scenes/FightScene'

const routing = () => (
  <Router>
    <Scene key="main">
      <Scene key="menu" component={MenuScene} />
      <Scene key="fight" component={FightScene} />
    </Scene>
  </Router>
)

export default routing
