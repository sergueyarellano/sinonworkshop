const test = require('blue-tape');
require('jsdom-global')();
global.$ = require('jquery');
const _ = require('underscore');
require('../../lib/marvel.js')('spider-man');

test('simple test', (assert) => {
  const arr = ['foo','bar', 'biz'];
  assert.deepEqual($('img').html(), 'hello');
  assert.deepEqual(_.last(arr), 'biz');
  assert.end();
});
