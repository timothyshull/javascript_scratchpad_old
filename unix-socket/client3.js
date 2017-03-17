/*jslint node: true*/
'use strict';
var net = require('net'),
    log = require('util').log,
    //port = process.argv[2] || process.env.PORT;
    client;

//client = new net.createConnection(port);

client = net.createConnection('./tmp/new.sock/', function () {

    log('CONNECTED TO: ');
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    client.write('I am Chuck Norris!');

});

//client.write('I am Chuck Norris!');

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function (data) {

    log('DATA: ' + data);
    // Close the client socket completely
    //client.destroy();

});

// Add a 'close' event handler for the client socket
client.on('close', function () {
    log('Connection closed');
});