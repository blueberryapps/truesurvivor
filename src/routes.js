import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import MenuScene from './scenes/MenuScene'
import FightScene from './scenes/FightScene'

const routing = () => (
  <Router>
    <Scene key="menu">
      <Scene navTransparent key="menu" component={MenuScene} />
      <Scene navTransparent back={false} key="fight" component={FightScene} />
    </Scene>
  </Router>
)

export default routing
