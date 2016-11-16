const test = require('tape')
const sinon = require('sinon')
const databaseConnection = require('../../lib/database.js')

test('get Full name from database', (assert) => {
  const response = {
    userName: 'David',
    firstName: 'Rodríguez',
    nickName: 'xrace300'
  }
  const stub = sinon.stub(databaseConnection, 'getUserInfo').returns(response)

  assert.deepEqual(databaseConnection.getUserInfo(), response)
  stub.restore()
  assert.end()
})

test('get User info FOR DAVID ONLY', (assert) => {
  const response = {
    userName: 'David',
    firstName: 'Rodríguez',
    nickName: 'xrace300'
  }

  let mock = sinon.mock(databaseConnection)

  mock.expects('getUserInfo').returns(response)

  assert.deepEqual(databaseConnection.getUserInfo('David'), response)
  assert.end()
  mock.verify()
})

test('get Error FOR INVALID USER', (assert) => {
  const mock = sinon.mock(databaseConnection)
  const spy = sinon.spy(databaseConnection, 'getManOfTheDay')

  mock.expects('getUserInfo').once().withArgs('Serguey').throws()

  try {
    console.log(databaseConnection.getManOfTheDay())
  } catch (error) {
    console.log('Error capturado!!!')
  }

  assert.true(spy.threw())
  assert.end()
  mock.verify()
})
