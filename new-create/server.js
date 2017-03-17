/*global require*/
/*jslint node: true*/
'use strict';
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8080,
    errNotFound;

errNotFound = function (res, stream) {
    fs.stat(path.join(process.cwd(), '404.html'), function (err, stats) {
        if (err || !stats.isFile()) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n", function () {
                res.end();
            });
            return;
        }
        res.writeHead(404, {"Content-Type": "text/html"});
        stream = fs.createReadStream(path.join(process.cwd(), '404.html')).pipe(res);
        stream.on('finish', function () {
            res.end();
        });
        return;
    });
};

http.createServer(function (req, res) {
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
            res.end();
        });
    });
}).listen(parseInt(port, 10));

console.log("Server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
