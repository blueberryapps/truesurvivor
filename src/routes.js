import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import AuthScene from './scenes/AuthScene'
import MenuScene from './scenes/MenuScene'
import CharacterScene from './scenes/CharacterScene'
import FightScene from './scenes/FightScene'
import Loading from './scenes/Loading'
import Win from './scenes/Win'
import Lose from './scenes/Lose'

const routing = () => (
  <Router>
    <Scene tabs navTransparent key="menu">
      <Scene hideNavBar key="load" component={Loading} />
      <Scene hideNavBar key="auth" component={AuthScene} />
      <Scene hideNavBar key="menu" component={MenuScene} />
      {/* <Scene key="character" component={CharacterScene} /> */}
      <Scene hideNavBar key="fight" component={FightScene} />
      <Scene hideNavBar key="win" component={Win} />
      <Scene hideNavBar key="lose" component={Lose} />
    </Scene>
  </Router>
)

export default routing
