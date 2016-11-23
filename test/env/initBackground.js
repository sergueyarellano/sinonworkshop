module.exports = () => {
  test = require('blue-tape');
  sinon = require('sinon');
  require('jsdom-global')();
  global.$ = require('jquery');
};
