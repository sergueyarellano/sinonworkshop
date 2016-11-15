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


Sources
- https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
- http://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test
