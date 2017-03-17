var HID = require('node-hid'),
    devices = HID.devices();
    //_ = require('lodash'),
    //productName = 'TEMPer1F_V1.3',
    //path = (_.find(devices, {product: productName})).path,
    //dev = new HID.HID(path);
//
//dev.resume();
//
//dev._paused = false;
//
//console.dir(dev);
//
//dev.on('data', function (data) {
//    console.log(data);
//});
//
//dev.read(function (error, data) {
//    if (!error) {
//        console.log(data);
//    } else {
//        console.log(error);
//    }
//});

console.dir(devices);