const test = require('blue-tape');
const promises = require('../../lib/promises.js');

test.skip('toss: should toss a 6', (assert) => {
  const expected = 6;

  return promises.toss(6)
  .then(actual => {
    assert.deepEqual(actual, expected);
  });
});

test.skip('toss: should toss an error', (assert) => {
  const expected = 'Not a six';

  return promises.toss(4)
  .then(actual => {
    // rejects value, throw error
  })
  .catch(error => {
    assert.deepEqual(error, expected);
  });
});
