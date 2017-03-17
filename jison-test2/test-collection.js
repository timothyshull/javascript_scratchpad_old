/*jslint node: true, stupid: true*/
'use strict';
var path = require('path'),
    parser = require("./collection").parser,
    arrStr = 'key=value,key=value';

console.dir(parser.parse(arrStr));