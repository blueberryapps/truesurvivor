import WhiteHat from './WhiteHat'
import BlackHat from './BlackHat'

export { WhiteHat, BlackHat }
export default Object.freeze({
  [WhiteHat.id]: WhiteHat,
  [BlackHat.id]: BlackHat,
})
