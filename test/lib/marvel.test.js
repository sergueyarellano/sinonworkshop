require('../env/initBackground')();
const console = require('console-browserify');

const render = require('../../lib/render');
const handler = require('../../lib/handler');
const api = require('marvel-api');
const marvel = api.createClient({
  publicKey: '1e2db92a6bcb00833909e51dc61bfce0'
  , privateKey: '452c66dca88cca7fe202f194325edb234849ad8e'
});

test('renderFantasticButton: should render button', (assert) => {
  render.renderFantasticButton('click me!');
  let actual = $('button').text();
  let expected = 'click me!';

  assert.deepEqual(actual, expected);

  $('button').remove();
  assert.end();
});

test('renderFantasticButton: button sould hide on click', (assert) => {
  let stub = sinon.stub(handler, 'callMarvel');
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
  let stub = sinon.stub(handler, 'callMarvel');
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
test('for presentation purposes', (assert) => {
  render.renderFantasticButton('click me!');
  assert.ok(true);
  assert.end();
});
