module.exports = {
  toss (number) {
    return new Promise((resolve, reject) => {
      number === 6 ? resolve(number) : reject('Not a six')
    })
  }
}
