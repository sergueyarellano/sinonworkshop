const test = require('tape')
// const sinon = require('sinon')
const recursive = require('../../lib/recursive.js')

test('stringCompressor: should compress a string', (assert) => {
  const actual = recursive.stringCompressor('aabbbcc')
  const expected = 'a2b3c2'
  // const spy = sinon.spy(recursive.stringCompressor)

  assert.deepEqual(actual, expected)
  assert.end()
})
