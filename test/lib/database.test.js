const test = require('tape');
const sinon = require('sinon');
const databaseConnection = require('../../lib/database.js');

test.skip('get Full name from database', (assert) => {
  const expected = {
    userName: 'Jules',
    firstName: 'Rodríguez',
    nickName: 'xrace300'
  };
  const stub = sinon.stub(databaseConnection, 'getUserInfo').returns(expected);
  const actual = databaseConnection.getUserInfo();

  assert.deepEqual(actual, expected);
  stub.restore();
  assert.end();
});

test.skip('get User info FOR DAVID ONLY', (assert) => {
  const expected = {
    userName: 'Jules',
    firstName: 'Rodríguez',
    nickName: 'xrace300'
  };

  let mock = sinon.mock(databaseConnection);
  mock.expects('getUserInfo').returns(expected);

  const actual = databaseConnection.getUserInfo('David');

  assert.deepEqual(actual, expected);
  assert.end();
  mock.verify();
});

test.skip('get Error FOR INVALID USER', (assert) => {
  const mock = sinon.mock(databaseConnection);
  const spy = sinon.spy(databaseConnection, 'getManOfTheDay');

  mock.expects('getUserInfo').once().withArgs('Charles').throws();

  try {
    console.log(databaseConnection.getManOfTheDay());
  } catch (error) {
    console.log('Error capturado!!!');
  }

  assert.true(spy.threw());
  assert.end();
  mock.verify();
});
