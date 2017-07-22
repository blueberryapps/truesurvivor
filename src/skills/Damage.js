// @flow
import { observable, action } from 'mobx'

import Skill from '../core/Skill'
import type { FightStore } from '../stores/fightStore'

const Damage = Skill.compose({
  props: {
    damageImpact: 1
  },
  methods: {
    execute: action.bound(execute)
  }
})

function execute(fight: FightStore) {
  fight.defender.damage(this.damageImpact)
}

export default Damage
