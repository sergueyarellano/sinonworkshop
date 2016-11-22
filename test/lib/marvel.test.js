const test = require('blue-tape');
const sinon = require('sinon');
require('jsdom-global')();
global.$ = require('jquery');
const render = require('../../lib/render');
const marvel = require('../../lib/marvel');

test('renderFantasticButton: should render button', (assert) => {
  render.renderFantasticButton('click me!');
  let actual = $('button').text();
  let expected = 'click me!';

  assert.deepEqual(actual, expected);

  $('button').remove();
  assert.end();
});

test('renderFantasticButton: button sould hide on click', (assert) => {
  let stub = sinon.stub(marvel, 'getSuperHero');
  render.renderFantasticButton('click me again!');
  $('button').click();
  let actual = $('button').css('display');
  let expected = 'none';

  assert.deepEqual(actual, expected);

  $('button').remove();
  stub.restore();
  assert.end();

});

test('renderImage: should render a image', (assert) => {
  let path = 'my/path';
  let extension = 'jpg';
  let name = 'Spider-Man';
  let desc = 'Bitten by a spider';
  render.renderImage(path, extension, name, desc);
  let actual = $('img').attr('src');
  let expected = 'my/path.jpg';
  assert.deepEqual(actual, expected);

  // do not forget to leave the environment and DOM clean
  $('img[src="my/path.jpg"]').parent().remove();
  assert.end();
});

test('INTEGRATION: clicking on button should display a profile of spider man', (assert) => {
  let path = 'my/path';
  let ext = 'jpg';
  let name = 'Spider-Man';
  let desc = 'Bitten by a spider';
  let stub = sinon.stub(marvel, 'getSuperHero');
  stub.returns(render.renderImage(path, ext, name, desc));

  render.renderFantasticButton('click me!');
  $('button').click();
  let actual = $('img').css('display');
  let expected = 'block';

  assert.deepEqual(actual, expected);

  $('button').remove();
  $('img').parent().remove();
  stub.restore();
  assert.end();
});

// remove
marvel.getSuperHero('spider-man');
