import compose from '@stamp/it'
import factions from '../factions/'

const Character = compose({
  init({ chid, name, faid }) {
    this.chid = chid
    this.name = name
    this.faction = factions[faid]
  },
  props: {
    skills: [],
  },
  statics: {
    withSkills,
  },
})

function withSkills(skills) {
  return this.props({ skills })
}

export default Character
