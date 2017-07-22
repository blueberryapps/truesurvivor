import compose from '@stamp/it'

const Faction = compose({
  props: {
    name: '',
    skills: [],
  },
  statics: {
    withSkills,
  },
})

function withSkills(skills) {
  return this.props({ skills })
}

export default Faction
