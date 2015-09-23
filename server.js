// express and app
var express = require('express');
var app = express();

// path and bodyParser
var path = require('path');
var bodyParser = require('body-parser');

// params over URL
app.use(bodyParser.urlencoded({extended: true}));

// view folder and view engine
app.set('views', path.join(__dirname, './servers/views'));
app.set('view engine', 'ejs');
require('./config/mongoose.js');
// routes and passing it app
require('./config/routes.js')(app);

// server listen and port number
app.listen(2010, function(){
	console.log('Message Board is on port 2010');
})