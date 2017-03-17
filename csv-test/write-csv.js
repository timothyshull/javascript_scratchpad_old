/*jslint node: true, nomen: true*/
'use strict';
var csv = require('csv'),
    stringifier = csv.stringify(),
    subArrayStringifier = csv.stringify({delimiter: '^'}),
    _ = require('lodash'),
    fs = require('fs');

module.exports = function (inputObject, inputFile, callback) {
    var dataString = '',
        keys = _.without(_.keys(inputObject), "request", "cmdArgs"),
        requestString;

    callback = callback || function () {return; };

    stringifier.on('readable', function () {
        var row;
        while (row = stringifier.read()) {
            dataString += row;
        }
    });

    stringifier.on('error', function (err) {
        callback.call(null, err.message);
    });

    stringifier.on('finish', function () {
        fs.writeFile(inputFile, dataString, function (err) {
            if (err) {
                callback.call(null, err);
            } else {
                callback.call(null, "success");
            }
        });
    });

    if (inputObject.hasOwnProperty("request") && typeof inputObject.request === "string") {
        requestString = 'request=\"' + inputObject.request + '\"';
        stringifier.write(requestString);
        stringifier.write([]);
    } else {
        callback.call(null, "provide request type");
    }

    if (inputObject.hasOwnProperty("cmdArgs") && inputObject.cmdArgs instanceof Array) {
        stringifier.write(inputObject.cmdArgs);
    }

    stringifier.write(['---']);

    _.forEach(keys, function (n) {
        var tempVal = inputObject[n],
            lineString = '';

        // check for object and stringify?
        if (tempVal instanceof Array) {
            stringifier.write([n + "=" + subArrayStringifier.stringify(tempVal)]);
        } else if (typeof tempVal === "string" || typeof tempVal === "number") {
            stringifier.write([n + "=" + tempVal.toString()]);
        } else if (typeof tempVal === 'object') {
            _.forEach(Object.keys(tempVal), function (j) {
                lineString += j + '=' + tempVal[j] + ',';
            });
            stringifier.write(lineString.substring(0, lineString.length - 1));
            stringifier.write([]);
        }
    });

    stringifier.end();
};


/***
 * request="bake-request-type"
 * arg1,arg2,arg3,etc… (command line arguments)
 * ---
 * key1=value1,key2=value2  (keep inputs of same type on a single line)
 * key3=value3,key4=value4 (different input type than line 1)
 * key5=value5^^value6^^value7 (representation of [value5,value6,value7])
 */

/***
 * {
 *     request: "bake-request-type",
 *     cmdArgs: ["arg1", "arg2", "arg3"],
 *     inputType1: {
 *         key1: "value1",
 *         key2: "value2"
 *     },
 *     inputType2: {
 *         key3: "value3",
 *         key4: "value4",
 *     },
 *     key5: ["value5", "value6", "value7"]
 * }
 */