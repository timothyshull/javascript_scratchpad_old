/*jslint node: true, nomen: true*/
'use strict';
var socket = require('socket.io-client')('http://localhost:8080'),
    _ = require('lodash'),
    osc = require('osc'),
    udpPort = new osc.UDPPort({
        localAddress: '0.0.0.0',
        localPort: 57121
    });

// Listen for incoming OSC bundles.
//udpPort.on('bundle', function (oscBundle) {
//    console.log('An OSC bundle just arrived!', oscBundle);
//    //socket.emit('test.event');
//});

udpPort.on("message", function (oscMsg) {
    var event = _.get(oscMsg, 'args')[0];
    console.log(event);
    socket.emit(event);
});

// Open the socket.
udpPort.open();

//socket.on('connect', function () {
//    console.log('client connected');
//});
//
//
socket.on('test.event.res', function (data) {
    // Send an OSC message to, say, SuperCollider
    udpPort.send({
        address: '/s_new',
        args: [data.toString()]
    }, '127.0.0.1', 57110);
});
//
//
//socket.on('disconnect', function () {
//    console.log('client disconnected');
//});