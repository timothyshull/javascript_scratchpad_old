/*jslint node: true, stupid: true*/
'use strict';
var path = require('path'),
    parser = require("./simple-list").parser,
    arrStr = 'key,value,anoth,10';

console.dir(parser.parse(arrStr));