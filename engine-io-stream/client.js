var engine = require("engine.io-stream/client");

// attach to an engine.io server at url '/numbers'
var stream = engine("http:192.168.1.2:8080/numbers");

stream.on('data', function(data) {
    console.log(data);
    stream.write('ack');
});
