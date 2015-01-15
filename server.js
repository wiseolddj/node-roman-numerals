'use strict';
var Express = require('express');
var app = Express();
var apiRoutes = require('./app/api.routes');
var cons = require('consolidate');
var bodyParser = require('body-parser');

//configure view engine for homepage
app.engine('hbs', cons.handlebars);
app.set('view engine', 'hbs');
app.set('views','./app/views');

//set up parsing post data
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//add the API routing
app.use('/', apiRoutes);

//start the server
var startServer = function () {
    app.listen(3000, function () {
        console.log('Server started on port 3000.. ');
    });
};

// Check if the module has been run directly (node index.js)
if (require.main === module) {
    startServer();
}
// Else call start server when index is required - require('index.js')
else {
    module.exports = startServer();
}
