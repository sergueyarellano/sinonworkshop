const sinon = require('sinon');
const codeModule = require('../code/code.js');

QUnit.module('Operations module');

test('should add two numbers', function () {
    const value = codeModule.add(1,2)
    const expected = 3;
    deepEqual(value, expected);
});

console.log('invoke function',codeModule.invoke('add', 1, 2, 3))
