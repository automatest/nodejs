var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// got Error: Cannot find module 'traceback'
// resolve: npm install traceback
var traceback = require('traceback');

var routes = require('../routes/index');
var users = require('../routes/users');

//===================================================//
var script_name = __filename.split('\\').pop();
console.log((Array(script_name.length+1).join('_')));
console.log(script_name);
console.log((Array(script_name.length+1).join('~')));
//===================================================//

var function_name = require('../utils.js');

////pass by value, which is the object's value
////the changes in the function is Not retained
/*
function pass_by_value(b){
	var function_n = arguments.callee.name;
	function_name(function_n);
	b = 2;
} */

module.exports = function(){
	console.log(arguments.callee.caller);
	var function_n = arguments.callee.name;
	//console.log(arguments.callee.prototype);
	//console.log(arguments.callee.caller.arguments);	
	function_name(function_n);
	console.log("script::" + script_name + " module.exports");
	
}