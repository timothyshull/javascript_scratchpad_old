var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use('/', express.static(__dirname));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

var liveServer = app.listen(3000, function () {

    var host = liveServer.address().address;
    var port = liveServer.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
