# Sinon workshop

Unit test are the smallest unit of functionality, tipically a method/function.

Every piece of code should not:

- Access the network
- Hit a database
- Use the file system

## Test Doubles, Stunt Doubles

Similar to how stunt doubles do the dangerous stuff in movies, we use test doubles to replace troublemakers and make tests easier to write.

Any kind of dependency must be *stubbed*, *mocked* or *spied* in order to get abstraction.

We can use *sinon.js* to simplify those cases with few lines of code.

```javascript
function setupNewUser(info) {
  var user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  Database.save(user);
}
```

# What on the earth are the difference between those terms

- *spies*: A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls.
 - We use spies when we want to control if something is call, in which way, how many times, ...
- *stub*: Test stubs are functions (spies) with pre-programmed behavior.
- *mocks*: Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations. A mock will fail your test if it is not used as expected.
    - If you want to control how your unit is being used and like stating expectations upfront (as opposed to asserting after the fact), use a mock.
    - If you wouldn’t add an assertion for some specific call, *don’t mock it*; use a stub instead.
- *fakes*: Object which simulates a right behaviour, a working implementation, an original alternative.
    - The difference with mocks is very thin. The test doesn't have control over the fake.
    - The difference with stubs is bigger. Stubs are made and injected in the system for indivudial tests and a specific need, but fakes are more complex.


## Type of functions

### Without side effects

- Dependent on its parameters:
	the result of "toLowerCase" depends only on the string that it is passed -> Nice! :)

### With side effects

- Dependent on external stuff:
	the result of "Database.save" does some kind of operation -> test-doubles -> hooray!

```javascript
QUnit.test('Should call save once', function(assert) {
	var save = sinon.spy(Database, 'save'); // Wrap save method

	setupNewUser({ name : 'serguey' }); // call the function to test

	assert.deepEqual( save.calledOnce, true)

	save.restore(); // unWrap method

})
```


Sources
- https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
- http://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test
