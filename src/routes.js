import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import AuthScene from './scenes/AuthScene'
import MenuScene from './scenes/MenuScene'
import FightScene from './scenes/FightScene'
import Loading from './scenes/Loading'

const routing = () => (
  <Router>
    <Scene navTransparent key="menu">
      <Scene key="load" component={Loading} />
      <Scene key="auth" component={AuthScene} />
      <Scene key="menu" component={MenuScene} />
      <Scene key="fight" component={FightScene} />
    </Scene>
  </Router>
)

export default routing
