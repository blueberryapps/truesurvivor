// @flow
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Picker, StyleSheet, View } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

import type { FightStore } from '../stores/fightStore'

import Background from '../components/Background'

type Props = {
  fightStore: FightStore
}

@inject('characterStore')
@observer
export default class CharacterScene extends Component<void, Props, void> {
  render() {
    const {
      text,
      faction,
      changeFaction,
      changeName
    } = this.props.characterStore

    return (
      <Background image={require('../../assets/img/travel.jpg')}>
        <View style={styles.container}>
          <FormLabel>Name</FormLabel>
          <FormInput
            placeholder="Fill your name"
            onChangeText={changeName}
            value={text}
          />
          <Picker
            selectedValue={faction}
            onValueChange={changeFaction}
          >
            <Picker.Item label="WhiteHat" value="whiteHat" />
            <Picker.Item label="GrayHat" value="grayHat" />
            <Picker.Item label="BlackHat" value="blackHat" />
          </Picker>
        </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
