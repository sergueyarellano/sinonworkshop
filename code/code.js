module.exports = {

  add(...args) {
      return args.reduce((acc, el) => acc + el);
  },
  substract (...args) {
      return args.reduce((acc, el) => acc - el);
  },
  invoke(fn, ...args) {
     return this[fn](...args);
  }
}

// resolver promesas
// - cuando se lance una excepción throw

// subscribe methods, unsubscribe
