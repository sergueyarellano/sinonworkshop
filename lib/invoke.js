module.exports = {
  getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min
  },
  add (...args) {
    return args.reduce((acc, el) => acc + el)
  },
  subtract (...args) {
    return args.reduce((acc, el) => acc - el)
  },
  invoke (fn, ...args) {
    return this[fn] ? this[fn](...args) : this.logFailure(fn)
  },
  logFailure (method) {
    throw new Error(`${method} is not defined in the invoke module`)
  }
}
