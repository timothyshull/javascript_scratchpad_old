/*jslint node: true, stupid: true*/
'use strict';
var parser = require("./json2").parser,
    testObj = {
        test_key_1: "test",
        test_key_2: 10
    },
    testJson = JSON.stringify(testObj);

console.dir(parser.parse(testJson));