/*global require*/
/*jslint node: true, nomen: true, stupid: true*/
'use strict';
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    net = require('net'),
    port = process.argv[2] || process.env.PORT,
    log = require('util').log,
    app,
    server,
    errNotFound;

errNotFound = function (res, stream) {
    var errFile = path.resolve(process.cwd(), '404.html');

    fs.stat(errFile, function (err, stats) {
        if (err || !stats.isFile()) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write('404 Not Found\n', function () {
                res.end(0);
            });
            return;
        }
        res.writeHead(404, {"Content-Type": "text/html"});
        stream = fs.createReadStream(errFile).pipe(res);
        stream.on('finish', function () {
            res.end(0);
        });
    });
};

server = http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname,
        filename = path.join(process.cwd(), uri),
        ext = path.extname(filename),
        type = '',
        fileExtensions = {
            'html': 'text/html',
            'css': 'text/css',
            'js': 'text/javascript',
            'json': 'application/json',
            'png': 'image/png',
            'jpg': 'image/jpg',
            'wav': 'audio/wav'
        },
        stream;

    if (fileExtensions.hasOwnProperty(ext)) {
        type = fileExtensions[ext];
    }

    fs.stat(filename, function (err, stats) {
        if (err || !stats) {
            errNotFound(res, stream);
            return;
        }

        if (!stats.isFile() && !stats.isDirectory()) {
            errNotFound(res, stream);
            return;
        }

        if (stats.isDirectory()) {
            filename += '/index.html';
        }

        res.writeHead(200, {'Content-Type': type});
        stream = fs.createReadStream(filename).pipe(res);
        stream.on('finish', function () {
            res.end(0);
        });
    });
}).listen(parseInt(port, 10), function () {
    log("Server running...\n  => listening on " + port + "/\nCTRL + C to shutdown");

    // downgrade process user to owner of this file
    return fs.stat(__filename, function (err, stats) {
        if (err) {
            throw err;
        }
        return process.setuid(stats.uid);
    });
});

// port is a UNIX socket file
if (isNaN(parseInt(port, 10))) {
    server.on('listening', function () {
        // set permissions
        return fs.chmod(port, 777);
    });

    // double-check EADDRINUSE
    server.on('error', function (e) {
        if (e.code !== 'EADDRINUSE') {
            throw e;
        }
        net.connect({path: port}, function () {
            // really in use: re-throw
            throw e;
        }).on('error', function (e) {
            if (e.code !== 'ECONNREFUSED') {
                throw e;
            }
            // not in use: delete it and re-listen
            fs.unlinkSync(port);
            server.listen(port);
        });
    });
}