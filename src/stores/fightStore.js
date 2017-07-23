import { observable, action } from 'mobx'
import { Audio } from 'expo'

import Fighter from '../core/Fighter'
import WhiteHat from '../factions/WhiteHat'

const playSound = async () => {
  await Audio.setIsEnabledAsync(true)
  const sound = new Audio.Sound()
  await sound.loadAsync(require('../../assets/sounds/kick.mp3'))
  await sound.playAsync()
};

export class FightStore {
  @observable attacker = new Fighter({ name: 'Kung Fury', faction: WhiteHat() })
  @observable defender = new Fighter({ name: 'Hackerman', faction: WhiteHat() })
  activateSkill = fighter => action.bound((skill) => {
    skill.execute(this, fighter)
    playSound()
  })
}

export default function createStore() {
  return new FightStore()
}
