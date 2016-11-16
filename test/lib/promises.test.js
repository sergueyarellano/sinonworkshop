const test = require('tape')
const promises = require('../../lib/promises.js')

test('toss: should toss a 6', (t) => {
  const expected = 6

  promises.toss(6)
  .then(actual => {
    t.deepEqual(actual, expected)
  })
  t.end()
})

test('toss: should toss an error', (t) => {
  const expected = 'Not a six'

  promises.toss(4)
  .then(actual => {
    // rejects value, throw error
  })
  .catch(error => {
    t.deepEqual(error, expected)
  })
  t.end()
})
