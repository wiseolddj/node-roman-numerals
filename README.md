# Roman Numerals
Node application to implement the following 'interface'. As JavaScript is object based you would not expect to use an interface as you might with JAVA or PHP.

```
interface RomanNumeralGenerator {
    public generate(<integer>); // convert from int -> roman
    public parse(<string>); // convert from roman -> int
}
```

I have chosen node as it is the choice of a current project I am working on.

---
## Running the project
Ensure you have node & npm installed. ([see the official docs](http://nodejs.org/))

Checkout the project.

Run ```npm install```

Then ``` node server.js```

The api will run on port 3000.

### Running tests

Install gulp globaly ``` npm install gulp -g ```

Run tests: ```gulp test```

---
## Approach
### implementing the interface
1. npm init -> set up the project
2. Add unit test framework -> chose [mocha](http://mochajs.org/) with [chai](http://chaijs.com/)
3. Added gulp task to run tests quickly `gulp test`
4. Use TDD to implement the above functions

I first added the generate function followed by parse.
For generate I created a helper function to create the segments of the roman numeral string. This way I minimised the map needed to generate the numeric representation.

For parsing I used regular expressions as they are well understtod for parsing strings. The tokens found in the string match against the map provided. The values for 4, 9, 40 etc have to be specifically looked for as it makes adding up the number easier and there is no nedd to do subtraction.. 

I added additional validation of the inputs as node/JavaScript is not type safe.

### rest api

#### steps taken:
1. Use the [express framework](http://expressjs.com/) to handle requests and responses.
2. Create a server.js to run the api
3. Created a homepage to desribe the API
4. Add routes to the express application
5. Handle the requests

### If I had more time
1. Add Integration/Acceptance tests for the API.
2. Handle errors as JSON
3. Use collections+JSON or JSON+LD/Hydra to create a hypermedia driven API (HATEOAS).

