/*jslint node: true, stupid: true*/
'use strict';
var path = require('path'),
    fs = require('fs'),
    parser = require("./test").parser,
    testStr = fs.readFileSync(path.join(__dirname, 'test.txt'), 'utf8');

function exec(input) {
    return parser.parse(input);
}

var twenty = exec(testStr);

console.dir(twenty);
