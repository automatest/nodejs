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
//===================================================//
var function_name = require('./utils.js');
var folder_n = script_name.replace("app", "zlesson").replace(".js","")
var lesson_f1 = folder_n.replace(folder_n.split("_")[0] + '_', '') + '1.js';
var path_required1 = './' + folder_n + '/' + lesson_f1;  
var lesson_f2 = folder_n.replace(folder_n.split("_")[0] + '_', '') + '2.js';
var path_required2 = './' + folder_n + '/' + lesson_f2;
//===================================================//

var util = require('util');

var name = 'Tony';
var greeting = util.format('hello, %s', name);
util.log(greeting);

/*
var funct_imported1 = require (path_required1);
funct_imported1;
  
var funct_imported2 = require (path_required2);
funct_imported2.greet();

//console.log('accessing module.exports-var greeting: ' + greet5y);
*/