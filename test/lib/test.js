const test = require('tape')
const codeModule = require('../../lib/code.js')

test('add: should add two numbers', (t) => {
  const actual = codeModule.invoke('add', 1, 2)
  const expected = 3
  t.deepEqual(actual, expected)
  t.end()
})

test('add: should add three numbers', (t) => {
  const actual = codeModule.invoke('add', 1, 2, 3)
  const expected = 6
  t.deepEqual(actual, expected)
  t.end()
})

test('subtract: should subtract two numbers', (t) => {
  const actual = codeModule.invoke('subtract', 1, 2)
  const expected = -1
  t.deepEqual(actual, expected)
  t.end()
})

test('subtract: should subtract three numbers', (t) => {
  const actual = codeModule.invoke('subtract', 1, 2, 3)
  const expected = -4
  t.deepEqual(actual, expected)
  t.end()
})
