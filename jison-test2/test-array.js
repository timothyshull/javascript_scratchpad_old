/*jslint node: true, stupid: true*/
'use strict';
var path = require('path'),
    parser = require("./array").parser,
    arrStr = '1^^2^^3';

console.dir(parser.parse(arrStr));