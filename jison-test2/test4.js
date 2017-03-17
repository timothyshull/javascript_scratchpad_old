/*jslint node: true, stupid: true*/
'use strict';
var path = require('path'),
    fs = require('fs'),
    str = fs.readFileSync(path.join(__dirname, 'records.txt'), 'utf8'),
    parser = require("./records").parser;

console.dir(parser.parse(str));
//console.dir(parser.parse('y'));