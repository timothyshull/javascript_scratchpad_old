/*jslint node: true, stupid: true*/
'use strict';
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8888,
    app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    ss = require('socket.io-stream');

server.listen(parseInt(port, 10));

app.get('*', function (req, res) {

    var uri = url.parse(req.url).pathname,
        filename = path.join(process.cwd(), uri);

    //path.exists(filename, function (exists) {
    //    if (!exists) {
    //        response.writeHead(404, {"Content-Type": "text/plain"});
    //        response.write("404 Not Found\n");
    //        response.end();
    //        return;
    //    }

        //if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    res.sendFile(filename);
});

io.on('connection', function (socket) {
    ss(socket).on('connect-stream', function (stream, data) {
        while (stream) {
            stream.pipe(Math.random());
        }
    });
});

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");