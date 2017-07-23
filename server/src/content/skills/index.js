const ss_coef = 0.5;
const boostable_value = (val, ss) => (ss_coef * ss) + val
const reducable_value = (val, ss) => val - (ss_coef * ss)

export default {
  'kick': (caster, target) => ({
    p1: { ...caster, stamina: caster.stamina - reducable_value(5, caster.ss) },
    p2: { ...target, health: target.health - boostable_value(10, target.ss) }
  })
};
