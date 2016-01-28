require('./greet.js');

//~~~~~~~~~~~~~~
require('path');
var script_name = require('path').basename(__filename);
console.log(Array(script_name.length+1).join("_"));
console.log(script_name);
console.log(Array(script_name.length+1).join("~"));
//~~~~~~~~~~~~~~

var traceback = require('traceback');



// use the functions of module.exports in greet.js
var greet = require('./greet.js');
greet();

// function statement
function greeting(){
	// function name
	var tb = traceback()[1];
	console.log(tb.method);
	 
	console.log("hi");
}

greeting();

// function are first-class
function logGreeting(fn){
	fn();
};

// pass a function, e.g. greet(), into a function
logGreeting(greeting);

// function expression
var greetMe = function(){
	console.log('greeting');
};

greetMe();

// it's fisrt-class
logGreeting(greetMe);

// use a function expression
logGreeting(function(){
	console.log('Hello T');
});