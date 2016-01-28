var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

//===================================================//
var script_name = __filename.split('\\').pop();
console.log((Array(script_name.length+1).join('_')));
console.log(script_name);
console.log((Array(script_name.length+1).join('~')));
//===================================================//

var person = {
	first_n : 'John',
	last_n : 'Doe', 
	greet : function(){ //// anonymous function as an object of property greet
		console.log('greeting, ' + this.first_n + ' ' + this.last_n);
		return 'rtn::greet function()'
	}
};

console.log("1." + person.first_n + ' ' + person.last_n);
console.log("2." + person['first_n'] + ' ' + person['last_n']);

console.log("3." + JSON.stringify(person));

console.log("4." + person.greet());