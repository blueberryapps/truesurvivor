import Faction from '../core/Faction'
import { Damage } from '../skills'

const WhiteHat = Faction.props({
  name: 'White hat',
}).withSkills([
  new Damage({ name: 'Tickle', damageImpact: 2 }),
  new Damage({ name: 'Slap', damageImpact: 5 }),
  new Damage({ name: 'Bash', damageImpact: 10 }),
])

export default WhiteHat
