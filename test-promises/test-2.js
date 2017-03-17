/*jslint node: true, nomen: true, stupid: true*/
/*jshint -W020*/
'use strict';
var fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    Promise = require('bluebird'),
    readdir = Promise.promisify(fs.readdir),
    stat = Promise.promisify(fs.stat),
    statFile,
    checkForSettingsFile,
    getClusterNames,
    filterer,
    fileToCheck = 'cluster_settings.yml',
    clusterDir = process.env.HOME;

statFile = function statFile(file) {
    var pathToUse = path.join(clusterDir, file);
    return stat(pathToUse).then(function (fileStat) {
        if (fileStat.isDirectory()) {
            return file;
        }
    });
};

filterer = function filterer(dir) {
    if (dir) {
        return dir;
    }
};

checkForSettingsFile = function checkForSettingsFile(file) {
    var pathToUse = path.join(clusterDir, file, fileToCheck);
    return Promise.props({
        stat: stat(pathToUse).catch(function (e) {
            /*jslint unparam: true*/
            return;
        }),
        file: file
    });
};

getClusterNames = function getClusterNames(clusterStat) {
    if (clusterStat.stat && clusterStat.stat.isFile()) {
        return clusterStat.file;
    }
};

readdir(clusterDir).then(function (files) {
    return Promise.all(files.map(statFile));
}).then(function (directories) {
    return Promise.all(directories.filter(filterer));
}).then(function (directories) {
    return Promise.all(directories.map(checkForSettingsFile));
}).then(function (clusters) {
    return Promise.all(clusters.map(getClusterNames));
}).then(function (clusters) {
    return Promise.all(clusters.filter(filterer));
}).then(function (clusters) {
    console.dir(clusters);
});