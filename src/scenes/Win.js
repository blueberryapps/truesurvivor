// @flow
import React, { Component } from 'react'

import Background from '../components/Background'

export default class Win extends Component<void, Props, void> {
  render() {
    return (
      <Background image={require('../../assets/img/win.jpg')} />
    )
  }
}
