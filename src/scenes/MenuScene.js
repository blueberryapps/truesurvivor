// @flow
import { inject, observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { compose } from 'recompose'

import Background from '../components/Background'

const decorate = compose(
  inject('authStore', 'preloadStore'),
  observer
)

const MenuScene = ({ authStore }) => (
  <Background image={require('../../assets/img/hoff.jpg')}>
    <View style={styles.container}>
      <Button backgroundColor="#f802f9" title="Dude, I wanna play!" raised onPress={() => Actions.fight()} fontFamily="press-start" style={styles.button} />
      <Button title="logout" onPress={authStore.logout} fontFamily="press-start" />
    </View>
  </Background>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10
  }
})

export default decorate(MenuScene)
