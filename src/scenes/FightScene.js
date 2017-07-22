// @flow
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { Constants } from 'expo'

import type { FightStore } from '../stores/fightStore'

import { FighterDisplay } from '../components'

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
      <View style={styles.container}>
        <FighterDisplay fighter={attacker} />
        <FighterDisplay fighter={defender} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
