/*jslint node: true*/
var HID = require('node-hid');

var devices = HID.devices();

console.dir(devices);
