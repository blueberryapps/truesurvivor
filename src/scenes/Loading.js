// @flow
import React, { Component } from 'react'
import { Audio } from 'expo'
import { Actions } from 'react-native-router-flux'

import Background from '../components/Background'

export default class IniaialLoading extends Component<void, Props, void> {
  playSound = async () => {
    await Audio.setIsEnabledAsync(true)
    const sound = new Audio.Sound()
    await sound.loadAsync(require('../../assets/sounds/true.mp3'))
    await sound.playAsync()
    await this.onLoad()
  };

  componentDidMount() {
    this.playSound()
  }


  onLoad = () => {
    setTimeout(() => Actions.menu(), 2000)
  }

  render() {
    return (
      <Background image={require('../../assets/img/loading.jpg')} />
    )
  }
}
