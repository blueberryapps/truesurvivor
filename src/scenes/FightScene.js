import React from 'react'
import { inject, observer } from 'mobx-react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'

@inject('fightStore')
@observer export default class App extends React.Component {
  render() {
    const {
      attackerHealth,
      attackerStamina,
      defenderHealth,
      defenderStamina,
    } = this.props.fightStore
    return (
      <View style={styles.container}>
        <Text>{`Attacker ${attackerHealth} / ${attackerStamina}`}</Text>
        <Text>{`Defender ${defenderHealth} / ${defenderStamina}`}</Text>
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
