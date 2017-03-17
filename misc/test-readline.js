/*jslint node: true*/
'use strict';
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think of Node.js? ", function (answer) {
    console.log("Thank you for your valuable feedback:", answer);

    rl.close();
});