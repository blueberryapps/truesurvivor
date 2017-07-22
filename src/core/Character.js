import compose from '@stamp/it'

const Character = compose({
  init({ name }, { stamp }) {
    this.skills = stamp.compose.configuration.skills.map(skill => skill.create())
    this.name = name
  },
})

export default Character
