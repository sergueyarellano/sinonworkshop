# Sinon workshop

Unit test are the smallest unit of functionality, tipically a method/function.

Every piece of code should not:

- Access the network
- Hit a database
- Use the file system

## Test Doubles, Stunt Doubles

Similar to how stunt doubles do the dangerous stuff in movies, we use test doubles to replace troublemakers and make tests easier to write

Any kind of dependency must be stubbed, mocked or spied in order to get abstraction.

We can use sinon.js to simplify those cases with few lines of code.

```javascript
function setupNewUser(info) {
  var user = {
    name: info.name,
    nameLowercase: info.name.toLowerCase()
  };

  Database.save(user);
}
```

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
