const test = require('tape')
const sinon = require('sinon')
const recursive = require('../../lib/recursive.js')

test('stringCompressor: should compress a string', (assert) => {
  const spy = sinon.spy(recursive, 'stringCompressorAux')
  const actual = recursive.stringCompressor('aabbbcc')
  const expected = 'a2b3c2'

  assert.deepEqual(actual, expected)
  spy.restore()
  assert.deepEqual(spy.callCount, 1)
  assert.end()
})
