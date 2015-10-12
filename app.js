var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose').connect('mongodb://localhost:27017/schoolApp');
var expressValidator = require('express-validator')
var port = 3000;


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


//put routes here
// require('./routes/index.js')(app);
// require('./routes/school.js')(app);
require('./routes/routes.js')(app);


//export app to run in start.js
module.exports = function() {

  return app;
}





app.listen(port, function() {

	console.log("Server has started on: ", port);
})