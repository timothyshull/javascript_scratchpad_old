/*jshint node: true, esnext: true*/
'use strict';
var fs = require('fs'),
    Promise = require('bluebird'),
    readline = require('readline');

//let tp = new Promise(function (resolve, reject) {
//    /*jslint unparam: true*/
//    reject(new Error('Rejected error'));
//}).then(function (result) {
//    console.log('Result 1 ' + result);
//    return result;
//}).then(function (result) {
//    console.log('Result 2 ' + result);
//    return result;
//}).catch(function(e) {
//    console.log('Catch handler ' + e);
//    console.log('Another');
//});

//let tp = new Promise(function (resolve, reject) {
//    /*jslint unparam: true*/
//    //reject(new Error('Rejected error'));
//
//    //setTimeout(function () {
//    //    resolve(1);
//    //}, 5000);
//
//    let rl = readline.createInterface({
//        input: process.stdin,
//        output: process.stdout
//    });
//
//    rl.question('What do you think of Node.js? ', function(answer) {
//        console.log('Thank you for your valuable feedback:', answer);
//
//        if (answer > 5) {
//            resolve(answer);
//        } else {
//            reject(new Error('Must be above 5'));
//        }
//
//        rl.close();
//    });
//}).then(function (result) {
//    console.log('Result 1 ' + result);
//    return result;
//}).then(function (result) {
//    console.log('Result 2 ' + result);
//    return result;
//}).catch(function(e) {
//    console.log('Catch handler ' + e);
//    console.log('Another');
//});
//
//tp.then(function (res) {
//    console.log('Another result' + res);
//    return res;
//});
//
//tp.then(function (res) {
//    console.log('can run again' + res);
//    return res;
//});

//let promiseFactory = function promiseFactory() {
//    return new Promise(function (resolve, reject) {
//        /*jslint unparam: true*/
//        //reject(new Error('Rejected error'));
//
//        //setTimeout(function () {
//        //    resolve(1);
//        //}, 5000);
//
//        let rl = readline.createInterface({
//            input: process.stdin,
//            output: process.stdout
//        });
//
//        rl.question('What do you think of Node.js? ', function(answer) {
//            let newVal = answer + 10;
//            console.log('Thank you for your valuable feedback:', newVal);
//
//            if (newVal > 20) {
//                resolve(newVal);
//            } else {
//                reject(new Error('Must be above 5'));
//            }
//
//            rl.close();
//        });
//    });
//};
//
//let tp = promiseFactory().then(function(val) {
//    console.log(val);
//});
//
//tp.then(function(val) {
//    console.log('another run of tp ' + val);
//});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var doSomething = function doSomething(prompt) {

    var modifier = 10;

    return new Promise(function (resolve, reject) {
        var value = 42;

        rl.question(prompt, function (answer) {
            console.log('Thank you for your valuable feedback:', answer);

            if (answer > 5) {
                resolve(answer + modifier + value);
            } else {
                reject(new Error('Must be above 5'));
            }

            rl.close();
        });
    });
};

//doSomething().then(function () {
//    return doSomethingElse();
//});
//
//doSomething().then(function () {
//    doSomethingElse();
//});
//
//doSomething().then(doSomethingElse());
//
//doSomething().then(doSomethingElse);

doSomething('prompt 1');
doSomething('prompt 2').then(function (val) {
    console.log('returned val is: ' + val);
});

//# sourceMappingURL=tp1-compiled.js.map