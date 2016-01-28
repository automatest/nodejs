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
/*
function pass_by_value(b){
	var function_n = arguments.callee.name;
	function_name(function_n);
	b = 2;
}*/

var greet1 = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet1');
greet1();

var greet2 = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet2').greet;
greet2();

var greet3 = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet3');
greet3.greet();
console.log(greet3.greeting);
greet3.greeting = 'changed object';
var greet3b = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet3');
greet3b.greet();
console.log(greet3b.greeting);

var Greet4 = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet4');
var grtr = new Greet4();
grtr.greet();

var greet5x = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet5').greetX;
var greet5y = require ('./' + script_name.replace("app", "zlesson").replace(".js","") + '/greet5').greetY;
greet5x();
console.log('accessing module.exports-var greeting: ' + greet5y);