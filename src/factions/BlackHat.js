import Faction from '../core/Faction'
import { Damage, Heal } from '../skills'

const BlackHat = Faction.props({
  name: 'Black hat',
}).withSkills([
  Heal({ name: 'Hotfix', healthPower: 10, staminaCost: 10 }),
  Heal({ name: 'Debug', healthPower: 20, staminaCost: 20 }),
  Damage({ name: 'Steal nudes', damageImpact: 5, staminaCost: 5 }),
  Damage({ name: 'Fappening', damageImpact: 10, staminaCost: 10 }),
])

export default BlackHat
