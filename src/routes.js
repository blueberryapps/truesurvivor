import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import MenuScene from '../scenes/MenuScene'
import FightScene from '../scenes/FightScene'

const routing = () => (
  <Router>
    <Scene key="menu" component={MenuScene} title="Menu" />
    <Scene key="fight" component={FightScene} title="Menu" />
  </Router>
)

export default routing
