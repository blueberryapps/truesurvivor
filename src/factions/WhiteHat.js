import Faction from '../core/Faction'
import { Damage, Heal } from '../skills'

const WhiteHat = Faction.props({
  name: 'White hat',
}).withSkills([
  Heal({ name: 'Hotfix', healPower: 10, staminaCost: 2 }),
  Heal({ name: 'Debug', healPower: 20, staminaCost: 5 }),
  Damage({ name: 'Steal nudes', damageImpact: 5, staminaCost: 5 }),
  Damage({ name: 'Fappening', damageImpact: 10, staminaCost: 10 }),
])

export default WhiteHat
