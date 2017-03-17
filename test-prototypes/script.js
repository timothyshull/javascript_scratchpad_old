/*jslint node: true, nomen: true*/
'use strict';
var net = require('net'),
    Socket = net.Socket,
    _ = require('lodash'),
    MySocket,
    mySocket,
    baseSocket;

MySocket = _.extend(Socket.prototype, {
    mySocketInit: function mySocketInit() {
        Socket.call(this);
    }
});

mySocket = Object.create(MySocket);
mySocket.mySocketInit();

console.dir(mySocket);
console.log('\n');
console.dir(mySocket.mySocketInit);
console.log('\n');

baseSocket = new Socket();

console.dir(baseSocket);

