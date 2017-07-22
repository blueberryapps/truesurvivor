import Character from '../core/Character'
import Skill from '../core/Skill'
import { Damage } from '../skills'

const WhiteHat = Character.compose({
  configuration: {
    skills: [
      Skill.compose(Damage).withName('Hurt him'),
    ],
  },
})

export default WhiteHat
