module.exports = {

  add (...args) {
    return args.reduce((acc, el) => acc + el)
  },
  subtract (...args) {
    return args.reduce((acc, el) => acc - el)
  },
  invoke (fn, ...args) {
    return this[fn](...args)
  }
}

// subscribe methods, unsubscribe
