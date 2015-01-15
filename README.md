# Roman Numerals
Node application to implement the following 'interface'. As JavaScript is object based you would not expect to use an interface as you might with JAVA or PHP.

```
interface RomanNumeralGenerator {
    public generate(<integer>); // convert from int -> roman
    public parse(<string>); // convert from roman -> int
}
```

I have chosen node as it is the choice of a current project I am working on.


## Approach
### implementing the interface
1. npm init -> set up the project
2. Add unit test framework -> chose mocha
3. Added gulp task to run tests quickly `gulp test`
4. Use TDD to implement the above functions

### rest api

#### steps taken:
1. Use the express framework to handle requests and responses.
2. Create a server.js to run the api
3. Add routes to the express application
4. Handle the requests

### If I had more time
1. Add Integration/Acceptance tests for the API.
2. Handle errors as JSON
