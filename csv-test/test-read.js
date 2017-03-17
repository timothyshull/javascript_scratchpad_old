var readFunc = require('./read-csv.js');

readFunc('./test.output.001', function (data) {
    console.dir(data);
});
