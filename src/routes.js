import React from 'react'
import { AppLoading } from 'expo'
import { Router, Scene } from 'react-native-router-flux'

import AuthScene from './scenes/AuthScene'
import MenuScene from './scenes/MenuScene'
import FightScene from './scenes/FightScene'

const routing = () => (
  <Router>
    <Scene key="menu">
      <Scene navTransparent key="load" component={AppLoading} />
      <Scene navTransparent key="auth" component={AuthScene} />
      <Scene navTransparent key="menu" component={MenuScene} />
      <Scene navTransparent back={false} key="fight" component={FightScene} />
    </Scene>
  </Router>
)

export default routing
