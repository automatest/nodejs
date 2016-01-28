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

var greet = require('./greet.js');
greet(); // --> greet.js-greet()



function greeting(){
	console.log("greeting");
}

// functions are first-class
function logGreeting(fn){
	fn();
}

logGreeting(greeting);

// function experssion - anonymous function
var greetMe = function(){
	console.log("anonymous greeting");
}

greetMe()

// first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
	console.log('anonymous function passed in on the fly')
})