// @flow
import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, Image, Text, View } from 'react-native'
import StatsBar from './StatsBar'
import SkillDisplay from './SkillDisplay'

@observer
export default class FighterDisplay extends React.Component {
  state = {
    skillName: ''
  }

  handleSkill = (skill) => {
    const { activateSkill } = this.props

    activateSkill(skill)
    this.setState({ skillName: skill.name })
  }

  render() {
    const { fighter: { character, health, stamina }, defender } = this.props

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
            {character.faction.skills.map((skill, index) => (
              <SkillDisplay
                index={index}
                key={skill.name}
                skill={skill}
                onActivate={() => this.handleSkill(skill)}
              />
            ))}
          </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'press-start',
    marginLeft: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 20
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 50
  },
  avatar: {
    width: 30,
    height: 46
  },
  playerInfo: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  defender: {
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
})
