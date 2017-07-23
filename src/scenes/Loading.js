// @flow
import React, { Component } from 'react'

import Background from '../components/Background'

export default class IniaialLoading extends Component<void, Props, void> {
  render() {
    return (
      <Background image={require('../../assets/img/loading.jpg')} />
    )
  }
}
