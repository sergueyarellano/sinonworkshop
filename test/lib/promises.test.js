const test = require('tape')
const promises = require('../../lib/promises.js')

test('toss: should toss a 6', (assert) => {
  const expected = 6

  promises.toss(6)
  .then(actual => {
    assert.deepEqual(actual, expected)
  })
  assert.end()
})

test('toss: should toss an error', (assert) => {
  const expected = 'Not a six'

  promises.toss(4)
  .then(actual => {
    // rejects value, throw error
  })
  .catch(error => {
    assert.deepEqual(error, expected)
  })
  assert.end()
})
