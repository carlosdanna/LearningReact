var express = require('express');

var app = express();

var parser = require('body-parser');
var React = require('react');
var Employees = require('./models/Employees.js');


require('./database.js');


app.set('view engine', 'ejs');

app.get('/', function(req,res){

	res.render('./../app/index.ejs',{});
});

app.use(express.static(__dirname+'/../.tmp'));

app.listen(3000);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/employees.js')(app);