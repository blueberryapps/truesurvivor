// @flow
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'

import type { FightStore } from '../stores/fightStore'

import { FighterDisplay } from '../components'
import Background from '../components/Background'

type Props = {
  fightStore: FightStore
}

@inject('fightStore')
@observer export default class App extends Component<void, Props, void> {
  render() {
    const {
      attacker,
      defender,
    } = this.props.fightStore
    return (

      <Background image={require('../../assets/img/travel.jpg')}>
        <View style={styles.container}>
          <FighterDisplay defender fighter={defender} />
          <FighterDisplay fighter={attacker} />
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
