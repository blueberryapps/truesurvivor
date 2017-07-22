// @flow
import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, Image, Text, View } from 'react-native'

import StatsBar from './StatsBar';
import SkillDisplay from './SkillDisplay'

function FighterDisplay({ defender, fighter }) {
  const { character, health, stamina } = fighter
  return (
    <View style={[styles.dashboard, defender && styles.defender]}>
      <View style={styles.info}>
        <View>
          <StatsBar value={health / 100} kind="hp" />
          <StatsBar value={stamina / 100} kind="stamina" />
        </View>
        <View style={styles.playerInfo}>
          <Image source={require('../../assets/img/avatar.png')} style={styles.avatar} />
          <Text style={styles.text}>{character.name}</Text>
        </View>
      </View>
      {!defender &&
        <View style={styles.skills}>
          {character.skills.map(skill => <SkillDisplay key={skill} skill={skill} />)}
        </View>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    marginLeft: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  },
  dashboard: {
    position: 'relative',
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    alignSelf: 'flex-start'
  },
  skills: {
    flexDirection: 'row',
    marginLeft: 50
  },
  avatar: {
    width: 30,
    height: 46
  },
  playerInfo: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-end'
  },
  defender: {
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
})

export default observer(FighterDisplay)
