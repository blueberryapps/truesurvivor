// @flow
import React from 'react'
import { observer } from 'mobx-react'
import { TouchableHighlight, StyleSheet, Image, View } from 'react-native'

function SkillDisplay({ skill, onActivate }) {
  const { name } = skill

  return (
    <View style={styles.skillWrapper}>
      <TouchableHighlight onPress={onActivate}>
        <Image source={require('../../assets/img/head-1.png')} style={styles.skill} />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  skill: {
    width: 30,
    height: 30
  },
  skillWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black'
  }
})

export default observer(SkillDisplay)
