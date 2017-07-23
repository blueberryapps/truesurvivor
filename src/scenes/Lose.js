// @flow
import React, { Component } from 'react'

import Background from '../components/Background'

export default class Lose extends Component<void, Props, void> {
  render() {
    return (
      <Background image={require('../../assets/img/gameover.jpg')} />
    )
  }
}
