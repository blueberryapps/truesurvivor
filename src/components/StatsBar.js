import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Bar } from 'react-native-progress'

const StatsBar = ({ kind, value }) => {

  return (
    <View style={styles.container}>
      {kind === 'hp' && <Image source={require('../../assets/img/hp.png')} style={styles.image} />}
      {kind === 'stamina' && <Image source={require('../../assets/img/flash.png')} style={styles.image} />}
      <Bar progress={value} width={200} color={kind === 'hp' ? '#fe0002' : '#20C20E'} style={styles.bar}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bar: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000'
  }
})

export default StatsBar
