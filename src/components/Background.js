import React from 'react';
import { Image, StyleSheet } from 'react-native'

const Background = ({ children, image, onPress }) => (
  <Image source={image} style={styles.container} onPress={onPress}>
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
