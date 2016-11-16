const test = require('tape')
const sinon = require('sinon')
const codeModule = require('../../lib/invoke.js')

test('invoke: should add two numbers', (assert) => {
  const actual = codeModule.invoke('add', 1, 2)
  const expected = 3
  assert.deepEqual(actual, expected)
  assert.end()
})

test('invoke: should add three numbers', (assert) => {
  const actual = codeModule.invoke('add', 1, 2, 3)
  const expected = 6
  assert.deepEqual(actual, expected)
  assert.end()
})

test('invoke: should subtract two numbers', (assert) => {
  const actual = codeModule.invoke('subtract', 1, 2)
  const expected = -1
  assert.deepEqual(actual, expected)
  assert.end()
})

test('invoke: should subtract three numbers', (assert) => {
  const actual = codeModule.invoke('subtract', 1, 2, 3)
  const expected = -4
  assert.deepEqual(actual, expected)
  assert.end()
})

test('invoke: should throw an error if the method is not defined', (assert) => {
  const methods = ['multiply', 'add', 'traverse']
  const expected = ` is not defined in the invoke module`
  const spyInvoke = sinon.spy(codeModule, 'invoke')
  const tryCatchTest = (method) => {
    try {
      codeModule.invoke(method, 1, 2, 3)
    } catch (actual) {
      assert.deepEqual(actual, new Error(method.concat(expected)))
    }
  }

  methods.forEach(tryCatchTest)
  spyInvoke.restore()

  assert.ok(spyInvoke.calledThrice)
  assert.deepEqual(spyInvoke.firstCall.args[0], 'multiply')
  assert.deepEqual(spyInvoke.secondCall.args[0], 'add')
  assert.deepEqual(spyInvoke.lastCall.args[0], 'traverse')
  assert.end()
})
