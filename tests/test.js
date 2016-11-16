const sinon = require('sinon');
const codeModule = require('../code/code.js');

QUnit.module('Operations module');

test('should add two numbers', function () {
    const value = codeModule.invoke('add', 1, 2);
    const expected = 3;
    deepEqual(value, expected);
});

test('should add three numbers', function () {
    const value = codeModule.invoke('add', 1, 2, 3);
    const expected = 6;
    deepEqual(value, expected);
});
