/*global console*/
/*jslint node: true*/
'use strict';
var net = require('net'),
    client;

client = net.connect({path: '/tmp/new.sock'}, function () { //'connect' listener
    console.log('connected to server!');
    client.write('world!\r\n');
});

client.on('data', function (data) {
    console.log(data.toString());
    //client.end(0);
});

client.on('end', function () {
    console.log('disconnected from server');
});

process.stdin.on('data', function (data) {
    client.write(data);
});