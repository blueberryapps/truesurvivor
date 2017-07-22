// @flow
import { action } from 'mobx'

import Skill from '../core/Skill'
import type { FightStore } from '../stores/fightStore'

const Damage = Skill.compose({
  props: {
    healPower: 1,
    staminaCost: 1,
  },
  methods: {
    execute: action(execute)
  }
})

function execute(fight: FightStore) {
  fight.attacker.damage(-(this.healPower))
  fight.attacker.tire(this.staminaCost)
}

export default Damage
