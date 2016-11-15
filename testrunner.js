var testrunner = require('qunit');

testrunner.run({
  code: './code/*.js',
  tests: './tests/*.js'
});
