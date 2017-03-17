/*jslint node: true*/
'use strict';
var fs = require('fs'),
    net = require('net'),
    http = require('http'),
    port = '/tmp/new.sock';

var app = function (sock) {
    /*jslint unparam: true*/
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('Hello World\n');
    console.log('client connected');

    sock.on('end', function () {
        console.log('client disconnected');
    });

    sock.write('hello\r\n');

    //sock.pipe(sock);
    sock.on('data', function (data) {
        console.log(data.toString());
    });

    process.stdin.on('data', function (data) {
        sock.write(data);
    });
};

var server = net.createServer(app).listen(port, function () {
    require('util').log("Listening on " + port);

    // downgrade process user to owner of this file
    return fs.stat(__filename, function (err, stats) {
        if (err) throw err;
        return process.setuid(stats.uid);
    });
});

// port is a UNIX socket file
if (isNaN(parseInt(port))) {
    server.on('listening', function () {
        // set permissions
        return fs.chmod(port, '777');
    });

    // double-check EADDRINUSE
    server.on('error', function (e) {
        if (e.code !== 'EADDRINUSE') throw e;
        net.connect({path: port}, function () {
            // really in use: re-throw
            throw e;
        }).on('error', function (e) {
            if (e.code !== 'ECONNREFUSED') throw e;
            // not in use: delete it and re-listen
            fs.unlinkSync(port);
            server.listen(port);
        });
    });
}