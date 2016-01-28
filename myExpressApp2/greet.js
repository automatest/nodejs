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

var greet = function(){
	var function_n = arguments.callee.name;///var function_n = traceback[1];
	function_name(function_n);
	//function_n.trim() == '' ? function_n='annonymous function w/o name':function_n;
	//console.log(function_n);
	//console.log((Array(function_n.length+1).join('~')));	
	
	console.log('hello');
};
greet()
module.exports = greet;