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

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function () {
    console.log("Someone is greeting");    
})


emtr.on('greet', function(){
    console.log('A greeting occurred');
});

console.log("Hello!");
emtr.emit("greet"); // it happened

////pass by reference, which is the object itself
////the changes in the function is retained
function pass_by_reference(d){
	var function_n = arguments.callee.name;///var function_n = traceback[1];
	function_name(function_n);
	//
    
}

