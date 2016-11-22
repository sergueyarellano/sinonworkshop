const test = require('blue-tape');
const sinon = require('sinon');
require('jsdom-global')();
global.$ = require('jquery');

test.skip('renderButton:should render a button', (assert) => {
  require('../../lib/marvel2render').renderButton();
  let actual = $('[data-id="myButton"]').length;
  assert.deepEqual(actual, 1);
  assert.end();
});
