// @flow
import compose from '@stamp/it'
import { action } from 'mobx'

import type Fighter from '../core/Fighter'

const Damage = compose({
  props: {
    damageImpact: 5,
  },
  methods: {
    @action.bound damageFighter(fighter: Fighter) {
      fighter.damage(this.damageImpact)
    },
  },
})

export default Damage
