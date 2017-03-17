/*jslint node: true*/
'use strict';
var csv = require('..'),
    i = 0,
    generator = csv.generate({seed: 1, columns: 2, length: 20}),
    parser = csv.parse(),
    transformer = csv.transform(function (data) {
        i += 1;
        return data.map(function (value) {
            return value.toUpperCase();
        });
    }),
    stringifier = csv.stringify(),
    data = [];

generator.on('readable', function () {
    while (data = generator.read()) {
        parser.write(data);
    }
});
generator.on('end', function () {
    parser.end();
});

parser.on('readable', function () {
    while (data = parser.read()) {
        transformer.write(data);
    }
});
parser.on('end', function () {
    transformer.end();
});

transformer.on('readable', function () {
    while (data = transformer.read()) {
        stringifier.write(data);
    }
});
transformer.on('end', function () {
    stringifier.end();
});

stringifier.on('readable', function () {
    while (data = stringifier.read()) {
        process.stdout.write(data);
    }
});
generator.on('end', function () {
    process.stdout.write('=> ' + i + ' records\n');
});

//var generate = require('csv-generate');
//
//var data = []
//var generator = generate({seed: 1, objectMode: true, columns: 2, length: 2});
//generator.on('readable', function(){
//    while(d = generator.read()){
//        data.push(d);
//    }
//});
//generator.on('error', function(err){
//    console.log(err);
//});
//generator.on('end', function(){
//    data.should.eql([ [ 'OMH', 'ONKCHhJmjadoA' ],[ 'D', 'GeACHiN' ] ]);
//});


//var csv = require('csv');
//
//var generator = csv.generate({seed: 1, columns: 2, length: 20}),
//    parser = csv.parse(),
//    transformer = csv.transform(function (data) {
//        return data.map(function (value) {
//            return value.toUpperCase();
//        });
//    }),
//    stringifier = csv.stringify();
//
//generator.on('readable', function () {
//    var data = generator.read();
//    while (data) {
//        parser.write(data);
//    }
//});
//
//parser.on('readable', function () {
//    var data = parser.read();
//    while (data) {
//        transformer.write(data);
//    }
//});
//
//transformer.on('readable', function () {
//    var data = transformer.read();
//    while (data) {
//        stringifier.write(data);
//    }
//});
//
//stringifier.on('readable', function () {
//    var data = stringifier.read();
//    while (data) {
//        process.stdout.write(data);
//    }
//});

//var csv = require('node-csv').createParser();
//
//var csv_str = "1,2,3\n4,5,6";
//
//csv.parse(csv_str, function (err, data) {
//    console.log(data); //Outputs: [[1,2,3],[4,5,6]]
//});
//
//// or
//
//csv.parseFile('./test.csv', function (err, data) {
//    console.log(data);
//});
//
//var csv = require('node-csv').createParser();
//
//csv.mapFile('./test.csv', function (err, data) {
//    console.log(data); //Outputs: [ { id: '1', user: 'foo', pass: 'bar' } ]
//});