// @flow
import React from 'react'
import { observer } from 'mobx-react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

function SkillDisplay({ skill }) {
  const { name } = skill
  return (
    <View>
      <Button title={name} />
    </View>
  )
}

export default observer(SkillDisplay)
