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

var function_name = require('./utils.js');

////object
console.log("//object");
var person = {
	first_n : 'John',
	last_n : 'Doe', 
	greet : function(){ //// anonymous function as an object of property greet
		var function_n = arguments.callee.name;
		function_name(function_n);
		console.log('greeting, ' + this.first_n + ' ' + this.last_n);
		return 'rtn::greet function()'
	}
};

console.log("1." + person.first_n + ' ' + person.last_n);
console.log("2." + person['first_n'] + ' ' + person['last_n']);

console.log("3." + JSON.stringify(person));

console.log("4." + person.greet());

////inheritance
console.log("//inheritance");
function Person(first_n, last_n) {
	this.last_n  = last_n;
	this.first_n = first_n;
}

////prototype***
Person.prototype.greet = function() {
	var function_n = arguments.callee.name;///var function_n = traceback[1];
	function_name(function_n);
	console.log('Person.prototype.greet::' + this.first_n + ' ' + this.last_n);
}

var p1 = new Person('John', 'D');
p1.greet();
var p2 = new Person('Jane', 'D');
p2.greet();

console.log(p1.__proto__);
console.log(p1.__proto__==p2.__proto__);