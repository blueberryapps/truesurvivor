// @flow
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

import Background from '../components/Background'

export default class App extends Component<void, Props, void> {
  render() {
    return (
      <Background image={require('../../assets/img/travel.jpg')}>
        <View style={styles.container}>
          <Button title="Dude, I wanna play!" raised />
        </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
})
