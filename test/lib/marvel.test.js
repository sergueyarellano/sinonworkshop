const test = require('blue-tape');
const sinon = require('sinon');
require('jsdom-global')();
global.$ = require('jquery');
const renderLib = require('../../lib/marvelrender');
const apiCallLib = require('../../lib/marvelapicalls');

test('renderFantasticButton: should render button', (assert) => {
  renderLib.renderFantasticButton('click me!');
  let actual = $('button').text();
  let expected = 'click me!';

  assert.deepEqual(actual, expected);

  $('button').remove();
  assert.end();
});

test('renderFantasticButton: button sould hide on click', (assert) => {
  let stub = sinon.stub(apiCallLib, 'getSuperHero');
  renderLib.renderFantasticButton('click me again!');
  $('button').click();
  let actual = $('button').css('display');
  let expected = 'none';

  assert.deepEqual(actual, expected);

  $('button').remove();
  stub.restore();
  assert.end();

});

test('renderFantasticButton: should call getSuperHero',
(assert) => {
  let spy = sinon.spy(apiCallLib, 'getSuperHero');

  renderLib.renderFantasticButton();
  $('button').click();
  assert.ok(spy.calledOnce);

  $('button').remove();
  spy.restore();
  assert.end();
});

test('getSuperHero: should return a promise with spider man data', (assert) => {
  return apiCallLib.getSuperHero('spider-man').then((result) => {
    assert.deepEqual(result.data[0].name, 'Spider-Man');
  });
});

test('')
