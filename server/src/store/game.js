import skills from '../content/skills'

export default class GameState {
  constructor({ p1, p2 }) {
    this.p1 = p1;
    this.p2 = p2;
    this.on_turn = null;
  }

  switch_turn() {
    this.on_turn = this.on_turn === this.p1.cid
      ? this.p2.cid : this.p1.cid 
  }

  finish() {
    console.log('Would have saved in DB');
  }

  perform_skill(skill_id, my_cid) {
    const perform = skills[skill_id];
    const caster = my_cid === this.p1.cid ? p1 : p2;
    const target = my_cid === this.p1.cid ? p2 : p1;
    const { p1, p2 } = perform({ caster, target });
    this.p1 = p1;
    this.p2 = p2;
  }

  is_winner() {
    const { health1 } = this.p1;
    const { health2 } = this.p2;

    const p1_lost = health1 < 0;
    const p2_lost = health2 < 0;

    if (p1_lost && p2_lost) return 'tie';
    if (p1_lost) return this.p1.cid;
    if (p2_lost) return this.p2.cid;
    return null;
  }
}
