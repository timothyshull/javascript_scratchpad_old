/*jslint node: true, nomen: true, stupid: true*/
/*jshint -W020*/
'use strict';
var fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    Promise = require('bluebird'),
    readdir = Promise.promisify(fs.readdir),
    stat = Promise.promisify(fs.stat),
    fileToCheck = 'cluster_settings.yml',
    clusterDir = process.env.HOME;

function statOneFile(file) {
    var pathToUse = path.join(clusterDir, file);
    return stat(pathToUse).then(function (fileStat) {
        if (fileStat.isDirectory()) {
            return file;
        }
    });
}

function checkForClusterSettings(file) {
    var pathToUse = path.join(clusterDir, file, fileToCheck);
    return Promise.props({
        stat: stat(pathToUse).catch(function (e) {
            /*jslint unparam: true*/
            return;
        }),
        file: file
    });
}

function getClusterNames(clusterStat) {
    if (clusterStat.stat && clusterStat.stat.isFile()) {
        return clusterStat.file;
    }
}

readdir(clusterDir).then(function (files) {
    return Promise.all(files.map(statOneFile));
}).then(function (directories) {
    directories = _.without(directories, undefined);
    return Promise.all(directories.map(checkForClusterSettings));
}).then(function (clusters) {
    return Promise.all(clusters.map(getClusterNames));
}).then(function (clusters) {
    clusters = _.without(clusters, undefined);
    console.dir(clusters);
    return clusters;
});


//var Promise = require("bluebird");
//var E = require("core-error-predicates");
//var fs = Promise.promisifyAll(require("fs"));

Promise.map(valuesToBeFiltered, function(value, index, length) {
    return Promise.all([filterer(value, index, length), value]);
}).then(function(values) {
    return values.filter(function(stuff) {
        return stuff[0] == true
    }).map(function(stuff) {
        return stuff[1];
    });
});

fs.readdirAsync(process.cwd()).filter(function(fileName) {
    return fs.statAsync(fileName)
        .then(function(stat) {
            return stat.isDirectory();
        })
        .catch(E.FileAccessError, function() {
            return false;
        });
}).each(function(directoryName) {
    console.log(directoryName, " is an accessible directory");
});