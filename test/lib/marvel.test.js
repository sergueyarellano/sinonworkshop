require('../env/initBackground')();
const render = require('../../lib/render');
const handler = require('../../lib/handler');

test('renderButton: should render button', (assert) => {
  const myContainer = $('<div>');
  render.renderButton(myContainer, 'click me!');
  let actual = myContainer.find('button').text();
  let expected = 'click me!';

  assert.deepEqual(actual, expected);
  $('button').remove();
  assert.end();
});

test('renderButton: should hide button on click', (assert) => {
  const spy = sinon.spy(handler, 'callMarvel');
  const myContainer = $('<div>');
  render.renderButton(myContainer);
  const btn = myContainer.find('button');
  btn.click();
  let actual = btn.is(':hidden');
  assert.ok(actual);
  assert.ok(spy.calledOnce);
  assert.end();
  spy.restore();
});

test('renderView: should render a view involving spider-man', (assert) => {
  const path = 'my/path';
  const ext = 'jpg';
  const description = 'bitten by a spider';
  const name = 'spider-man';
  const dataView = {
    path,
    ext,
    description,
    name
  };
  var myContainer = $('<div></div>');
  render.renderView(myContainer, dataView);
  const result = myContainer.find(`#${name}`);
  assert.ok(result.length);
  assert.end();
});

test('integration: should render superhero after clicking button', (assert) => {

})
// handler.callMarvel('spider-man');

//
// const render = require('../../lib/render');
// const handler = require('../../lib/handler');
//
// test('renderFantasticButton: should render button', (assert) => {
//   render.renderFantasticButton('click me!');
//   let actual = $('button').text();
//   let expected = 'click me!';
//
//   assert.deepEqual(actual, expected);
//   $('button').remove();
//   assert.end();
// });
//
// test('renderFantasticButton: button sould hide on click', (assert) => {
//   let stub = sinon.stub(handler, 'callMarvel');
//   render.renderFantasticButton('click me again!');
//   $('button').click();
//   let actual = $('button').css('display');
//   let expected = 'none';
//
//   assert.deepEqual(actual, expected);
//
//   $('button').remove();
//   stub.restore();
//   assert.end();
// });
//
// test('renderImage: should render a image', (assert) => {
//   let path = 'my/path';
//   let extension = 'jpg';
//   let name = 'Spider-Man';
//   let desc = 'Bitten by a spider';
//   render.renderImage(path, extension, name, desc);
//   let actual = $('img').attr('src');
//   let expected = 'my/path.jpg';
//   assert.deepEqual(actual, expected);
//
//   // do not forget to leave the environment and DOM clean
//   $('img[src="my/path.jpg"]').parent().remove();
//   assert.end();
// });
//
// test('INTEGRATION: clicking on button should display a profile of spider man', (assert) => {
//   let path = 'my/path';
//   let ext = 'jpg';
//   let name = 'Spider-Man';
//   let desc = 'Bitten by a spider';
//   let stub = sinon.stub(handler, 'callMarvel');
//
//   render.renderFantasticButton('click me!');
//   $('button').click();
//   stub.returns(render.renderImage(path, ext, name, desc));
//   let actual = $('img').css('display');
//   let expected = 'block';
//
//   assert.deepEqual(actual, expected);
//
//   $('button').remove();
//   $('img').parent().remove();
//   stub.restore();
//   assert.end();
// });
//
// // remove
// test('for presentation purposes', (assert) => {
//   render.renderFantasticButton('click me!');
//   assert.ok(true);
//   assert.end();
// });
