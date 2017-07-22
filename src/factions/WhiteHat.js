import Faction from '../core/Faction'
import { Damage } from '../skills'

const WhiteHat = Faction.props({
  name: 'White hat',
}).withSkills([
  Damage({ name: 'Tickle', damageImpact: 2 }),
  Damage({ name: 'Slap', damageImpact: 5 }),
  Damage({ name: 'Bash', damageImpact: 10 }),
])

export default WhiteHat
