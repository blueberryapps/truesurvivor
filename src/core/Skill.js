// @flow
import compose from '@stamp/it'

const Skill = compose({
  statics: {
    withName(name: string) {
      return this.props({ name })
    },
  },
})

export default Skill
