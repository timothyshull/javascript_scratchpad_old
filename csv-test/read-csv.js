/*global console*/
/*jslint node: true, nomen: true, regexp: true*/
'use strict';
var fs = require('fs'),
    _ = require('lodash'),
    parse = require('csv').parse;


//var fs = require('fs'),
//    csv = require('csv'),
//    parse = csv.parse,
//    transform = csv.transform,
//    parser = parse({delimiter: ':'}),
//    input = fs.createReadStream('/etc/passwd'),
//    transformer = transform(function (record, callback) {
//        setTimeout(function () {
//            callback(null, record.join(' ') + '\n');
//        }, 500);
//    }, {parallel: 10});
//input.pipe(parser).pipe(transformer).pipe(process.stdout);
//

module.exports = function (bakeOutFile, callback) {
    var splitToKeyVal = function (str) {
            return str.split(/\=(.+)/);
        },
        stringToArray = function (str) {
            if (/\^/.test(str)) {
                return str.split(/\^/);
            }
            return str;
        },
        stringToNum = function (str) {
            if (/[0-9]/.test(str) && /\./.test(str) && !/[a-zA-Z]/.test(str)) {
                return parseFloat(str);
            }
            if (/[0-9]/.test(str) && !/[a-zA-Z]/.test(str)) {
                return parseInt(str, 10);
            }
            return str;
        },
        stripQuotes = function (val) {
            if (typeof val === 'string' && (val[0] === '"' || val[0] === '\'') && (val[val.length - 1] === '"' || val[val.length - 1] === '\'')) {
                return val.substring(1, val.length - 1);
            }
            return val;
        },
        convertVal = function (str) {
            var convertedVal = stringToArray(str);

            if (convertedVal instanceof Array) {
                convertedVal = _.map(convertedVal, stringToNum);
            } else {
                convertedVal = stringToNum(convertedVal);
            }
            return stripQuotes(convertedVal);
        },
        mapArrayToKeyVal = function (obj, arr) {
            obj = obj || {};
            if (arr.length < 2) {
                return;
            }
            if (obj.hasOwnProperty(arr[0])) {
                return;
            }
            obj[arr[0]] = convertVal(arr[1]);
        },
        objFromOutFileData = function (dataArr) {
            var containerObj = {},
                lineSepIndex = _.findIndex(dataArr, function (subArray) {
                    return subArray[0] === '---';
                }),
                valsAndErrorsArray = _.slice(dataArr, lineSepIndex + 1, dataArr.length);
            _.forEach(dataArr[0], function (n) {
                mapArrayToKeyVal(containerObj, splitToKeyVal(n));
            });

            _.forEach(valsAndErrorsArray, function (d) {
                _.forEach(d, function (j) {
                    mapArrayToKeyVal(containerObj, splitToKeyVal(j));
                });
            });

            return containerObj;
        },
        parser = parse({quote: true}, function (err, data) {
            /*jslint unparam: true*/
            if (err) {
                callback.call(null, err);
            }
            callback.call(null, objFromOutFileData(data));
        });

    callback = callback || function () {return; };

    fs.createReadStream(bakeOutFile).pipe(parser);
};


