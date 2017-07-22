import React from 'react';
import { Image, StyleSheet } from 'react-native'

const Background = ({ children, image }) => (
  <Image source={image} style={styles.container}>
    {children}
  </Image>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
})

export default Background
