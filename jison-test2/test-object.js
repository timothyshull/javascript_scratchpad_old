/*jslint node: true, stupid: true*/
'use strict';
var path = require('path'),
    parser = require("./object").parser,
    arrStr = 'key_1,key_2=10,key_3=test:';

console.dir(parser.parse(arrStr));