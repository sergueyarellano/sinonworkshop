const sinon = require('sinon'),
	assert = require('assert'),
	jQuery = require('jquery-ajax'),
	once = require('../lib/once');

describe('Spies - Testing once with Sinon', () => {
	it('calls the original function', function() {
		let callback = sinon.spy();
		let proxy = once(callback);

		proxy();

		assert(callback.called);
	});

	it('calls the original function only once', function() {
		let callback = sinon.spy();
		let proxy = once(callback);

		proxy();
		proxy();

		assert(callback.calledOnce);
		// ...or:
		// assert.equals(callback.callCount, 1);
	});

	it('calls original function with right this and args', function() {
		let callback = sinon.spy();
		let proxy = once(callback);
		let obj = {};

		proxy.call(obj, 1, 2, 3);

		assert(callback.calledOn(obj));
		assert(callback.calledWith(1, 2, 3));
	});

});

describe('Stubs - Testing once with Sinon', () => {
	it('returns the return value from the original function', function() {
		let callback = sinon.stub().returns(42);
		let proxy = once(callback);

		assert.equal(proxy(), 42);
	});
});

describe('Mocks - Testing once with Sinon', () => {
	it('returns the return value from the original function', function() {
		let myAPI = {
			method: function() {}
		};
		let mock = sinon.mock(myAPI);
		mock.expects('method').once().returns(42);

		let proxy = once(myAPI.method);

		assert.equal(proxy(), 42);
		mock.verify();
	});
});

describe('FakeTimers - Testing Sinon', () => {
	// Function under test
	function throttle(callback) {
		let timer;

		return function() {
			clearTimeout(timer);

			const args = [].slice.call(arguments);

			timer = setTimeout(function() {
				callback.apply(this, args);
			}, 100);
		};
	}

	let clock;

	before(function() {
		clock = sinon.useFakeTimers();
	});

	after(function() {
		clock.restore();
	});

	it('calls callback after 100ms', function() {
		const callback = sinon.spy(),
			throttled = throttle(callback);

		throttled();

		clock.tick(99);
		assert(callback.notCalled);

		clock.tick(1);
		assert(callback.calledOnce);

		// Also:
		// assert.equals(new Date().getTime(), 100);
	});
});
