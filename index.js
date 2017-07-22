export default class Functor {
  // return :: a -> f a
  constructor(value) {
    this.value = value; }

  // fmap :: (a -> b) -> f a -> f b
  fmap(...args) {
    const iterate = Prototypes[this.value.prototype];
    return iterate.apply(this, args);
  }
}

const Prototypes = {
  Array: Array.map,
  Promise: function (res, rej) {
    return this.value.then(res).catch(rej);
  },
  Generator: function (fn) {
    const { value, done } = 
    return done ? : this.value.next(fn);
  },
  String: function (fn) {
    if (!this.value.length) return this.value;
    const [x, xs] = this.value;
    return xs ? [fn(x), ...Prototypes.String(xs)] : [fn(x)];
  }
};
