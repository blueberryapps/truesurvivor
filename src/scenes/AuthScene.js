// @flow
import { inject, observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import { compose } from 'recompose'

import Background from '../components/Background'

const decorate = compose(
  inject('authStore'),
  observer,
)

const AuthScene = ({ authStore }) => (
  <Background image={require('../../assets/img/travel.jpg')}>
    <View style={styles.container}>
      <SocialIcon
        button
        title="Google will let me in"
        type="google-plus-official"
        onPress={authStore.authenticate}
        disabled={authStore.isAuthenticating}
        loading={authStore.isAuthenticating}
      />
    </View>
  </Background>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default decorate(AuthScene)
