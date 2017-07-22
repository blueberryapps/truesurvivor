// @flow
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import Background from '../components/Background'

export default class App extends Component {
  onPlay = () => {
    Actions.fight()
  }
  render() {
    return (
      <Background image={require('../../assets/img/hoff.jpg')}>
        <View style={styles.container}>
          <Button backgroundColor="red" title="Dude, I wanna play!" raised large onPress={this.onPlay} />
        </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
