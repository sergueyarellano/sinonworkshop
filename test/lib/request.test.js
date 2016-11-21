const request = require('request')
const test = require('blue-tape')
require('jsdom-global')()
global.$ = require('jquery')
const _ = require('underscore')
require('../../lib/requests.js')

test('simple test', (assert) => {
  document.body.innerHTML = 'hello'
  const arr = ['foo','bar', 'biz']
  $('body').html('hola browserify!')
  assert.deepEqual($('body').html(), 'hello')
  assert.deepEqual(_.last(arr), 'biz')
  assert.end()
})
