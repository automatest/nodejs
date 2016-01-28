
//~~~~~~~~~~~~~~
require('path');
var script_name = require('path').basename(__filename);
console.log(Array(script_name.length+1).join("_"));
console.log(script_name);
console.log(Array(script_name.length+1).join("~"));
//~~~~~~~~~~~~~~


var greet = function() {
	console.log('greet');
}

greet();

module.exports = greet;
