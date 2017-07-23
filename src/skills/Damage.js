// @flow
import { action } from 'mobx'

import Skill from '../core/Skill'
import type { FightStore } from '../stores/fightStore'

const Damage = Skill.compose({
  props: {
    damageImpact: 1,
    staminaCost: 1,
  },
  methods: {
    execute: action(execute),
  },
})

function execute(fight: FightStore) {
  fight.defender.damage(this.damageImpact)
  fight.attacker.tire(this.staminaCost)
}

export default Damage
