/*global require*/
/*jslint node: true*/
'use strict';
var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8080;

http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname,
        filename = path.join(process.cwd(), uri),
        ext = path.extname(filename),
        type = '',
        fileExtensions = {
            'html':'text/html',
            'css':'text/css',
            'js':'text/javascript',
            'json':'application/json',
            'png':'image/png',
            'jpg':'image/jpg',
            'wav':'audio/wav'
        };

    for (var i in fileExtensions) {
        if (ext === i) {
            type = fileExtensions[i];
            break;
        }
    }

    fs.exists(filename, function (exists) {
        if (!exists) {
            if (fs.exists(path.join(process.cwd(), '404.html'))) {
                res.writeHead(404, {"Content-Type": "text/html"});
                fs.createReadStream(path.join(process.cwd(), '404.html'));
                res.end();
                return;
            }
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) {
            filename += '/index.html';
        }

        res.writeHead(200, { 'Content-Type': type });
        fs.createReadStream(filename).pipe(res);
        res.end();
    });
}).listen(parseInt(port, 10));

console.log("Server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
