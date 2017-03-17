/*global require*/
/*jslint node: true, nomen: true*/
'use strict';
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    net = require('net'),
    port = './tmp/new.sock',
//port = process.argv[2] || process.env.PORT,
    log = require('util').log,
    server,
    socket,
    errNotFound;


//errNotFound = function (res, stream) {
//    var errFile = path.resolve(process.cwd(), '404.html');
//
//    fs.stat(errFile, function (err, stats) {
//        if (err || !stats.isFile()) {
//            res.writeHead(404, {"Content-Type": "text/plain"});
//            res.write('404 Not Found\n', function () {
//                res.end(0);
//            });
//            return;
//        }
//        res.writeHead(404, {"Content-Type": "text/html"});
//        stream = fs.createReadStream(errFile).pipe(res);
//        stream.on('finish', function () {
//            res.end(0);
//        });
//    });
//};


// Create socket file
//fs.open('/tmp/comm.sock', 'w+', function (err, fdesc) {
//    if (err || !fdesc) {
//        throw 'Error: ' + (err || 'No fdesc');
//    }
//
//    // Create socket
//    socket = new net.Socket({fd: fdesc});
//    console.log(socket);
//});

//socket = new net.Socket({path: './tmp/comm.sock'});
//console.log(socket);

//server = net.createServer(function (req, res) {
//    //var uri = url.parse(req.url).pathname,
//    //    filename = path.join(process.cwd(), uri),
//    //    ext = path.extname(filename),
//    //    type = '',
//    //    fileExtensions = {
//    //        'html': 'text/html',
//    //        'css': 'text/css',
//    //        'js': 'text/javascript',
//    //        'json': 'application/json',
//    //        'png': 'image/png',
//    //        'jpg': 'image/jpg',
//    //        'wav': 'audio/wav'
//    //    },
//    //    stream;
//    //
//    //if (fileExtensions.hasOwnProperty(ext)) {
//    //    type = fileExtensions[ext];
//    //}
//    //
//    //fs.stat(filename, function (err, stats) {
//    //    if (err || !stats) {
//    //        errNotFound(res, stream);
//    //        return;
//    //    }
//    //
//    //    if (!stats.isFile() && !stats.isDirectory()) {
//    //        errNotFound(res, stream);
//    //        return;
//    //    }
//    //
//    //    if (stats.isDirectory()) {
//    //        filename += '/index.html';
//    //    }
//    //
//    //    res.writeHead(200, {'Content-Type': type});
//    //    stream = fs.createReadStream(filename).pipe(res);
//    //    stream.on('finish', function () {
//    //        res.end(0);
//    //    });
//    //});
//}).listen(socket, function () {
//    log("Server running...\n  => listening on " + port + "\nCTRL + C to shutdown");
//
//    // downgrade process user to owner of this file
//    return fs.stat(__filename, function (err, stats) {
//        if (err) {
//            throw err;
//        }
//        return process.setuid(stats.uid);
//    });
//});

server = net.createServer(function (socket) {
    console.log('client connected');
    socket.on('end', function () {
        console.log('client disconnected');
    });
    socket.write('hello\r\n');
    socket.pipe(socket);
});

//server.listen(port, function () {
//    log("Server running...\n  => listening on " + port + "\nCTRL + C to shutdown");
//
//    // downgrade process user to owner of this file
//    return fs.stat(__filename, function (err, stats) {
//        if (err) {
//            throw err;
//        }
//        return process.setuid(stats.uid);
//    });
//});

//fs.chmodSync(port, '777');

//server.listen(port);

//server.on('listening', function () {
//    console.log('listening');
//    //return fs.chmod(port, '777');
//});

server.on('listening', function () {
    // set permissions
    console.log('listening');
    return fs.chmod(port, '0777');
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

// port is a UNIX socket file
//if (isNaN(parseInt(port, 10))) {
//    server.on('listening', function () {
//        // set permissions
//        return fs.chmod(port, '777');
//    });
//
//    // double-check EADDRINUSE
//    server.on('error', function (e) {
//        if (e.code !== 'EADDRINUSE') {
//            throw e;
//        }
//        //net.connect({path: port}, function () {
//        //    // really in use: re-throw
//        //    throw e;
//        //}).on('error', function (e) {
//        //    if (e.code !== 'ECONNREFUSED') {
//        //        throw e;
//        //    }
//        //    // not in use: delete it and re-listen
//        //    fs.unlink(port, function () {
//        //        server.listen(port);
//        //    });
//        //});
//    });
//}