var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// got Error: Cannot find module 'traceback'
// resolve: npm install traceback
var traceback = require('traceback');

var routes = require('./routes/index');
var users = require('./routes/users');

//===================================================//
var script_name = __filename.split('\\').pop();
console.log((Array(script_name.length+1).join('_')));
console.log(script_name);
console.log((Array(script_name.length+1).join('~')));
//===================================================//

var function_name = require('./utils.js');

////pass by value, which is the object's value
////the changes in the function is Not retained
function pass_by_value(b){
	var function_n = arguments.callee.name;
	function_name(function_n);
	b = 2;
}

var a=1;
console.log('a = ' + a);
pass_by_value(3)
console.log('a = ' + a);

////pass by reference, which is the object itself
////the changes in the function is retained
function pass_by_reference(d){
	var function_n = arguments.callee.name;///var function_n = traceback[1];
	function_name(function_n);
	d.prop1 = function(){};
	d.prop2 = {}
}

var c= {};
c.prop1 = {};
console.log(c);
pass_by_reference(c);
console.log(c);

//// Immediate Invoked Function Expression (IIFE)
//// variable declared inside a function
//// is not retained outside the function
(function (last_n) {
	var function_n = arguments.callee.name;///var function_n = traceback[1];	
	function_name(function_n);
	var first_n = 'John';
	console.log(first_n);
	console.log(last_n);
}('myLastname')); // declare function, and invoke function immediately

var first_n = 'Jane';
console.log(first_n);