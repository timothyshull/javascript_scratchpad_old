/*jshint node: true, esnext: true*/
'use strict';
const fs = require('fs'),
    Promise = require('bluebird');

Promise.promisifyAll(fs);

//fs.readFile('config.json',
//    function (error, text) {
//        if (error) {
//            console.error('Error while reading config file');
//        } else {
//            try {
//                let obj = JSON.parse(text);
//                console.log(JSON.stringify(obj, null, 4));
//            } catch (e) {
//                console.error('Invalid JSON in file');
//            }
//        }
//    }
//);

fs.readFileAsync('config.json')
    .then(function (text) { // (A)
        let obj = JSON.parse(text);
        console.log(JSON.stringify(obj, null, 4));
    })
    .catch(function (reason) { // (B)
        // File read error or JSON SyntaxError
        console.error('An error occurred', reason);
    });
