// @flow
import { inject, observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { compose } from 'recompose'

import Background from '../components/Background'

const decorate = compose(
  inject('authStore'),
  observer,
)

const MenuScene = ({ authStore }) => (
  <Background image={require('../../assets/img/hoff.jpg')}>
    <View style={styles.container}>
      <Button backgroundColor="red" title="Dude, I wanna play!" raised large onPress={() => Actions.fight()} />
      <Button title="logout" onPress={authStore.logout} />
    </View>
  </Background>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default decorate(MenuScene)
