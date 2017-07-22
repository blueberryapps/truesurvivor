// @flow
import React, { Component } from 'react'
import { Audio } from 'expo'

import Background from '../components/Background'

export default class IniaialLoading extends Component<void, Props, void> {
  playSound = async () => {
    await Audio.setIsEnabledAsync(true)
    const sound = new Audio.Sound()
    await sound.loadAsync(require('../../assets/sounds/true.mp3'))
    await sound.playAsync()
  };

  componentDidMount() {
    this.playSound()
  }

  render() {
    return (
      <Background image={require('../../assets/img/loading.jpg')} />
    )
  }
}
