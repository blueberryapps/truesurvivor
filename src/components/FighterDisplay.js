// @flow
import React from 'react'
import { observer } from 'mobx-react'
import { Text, View } from 'react-native'

import SkillDisplay from './SkillDisplay'

function FighterDisplay({ fighter }) {
  const { character, health, stamina } = fighter
  return (
    <View>
      <Text>{`${character.name} ${health} / ${stamina}`}</Text>
      {character.skills.map(skill => <SkillDisplay skill={skill} />)}
    </View>
  )
}

export default observer(FighterDisplay)
