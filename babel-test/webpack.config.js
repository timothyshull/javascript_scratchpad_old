/*jslint node: true*/
var path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [
        { test: path.join(__dirname, 'js'),
            exclude: path.join(__dirname, 'node_modules'),
            loader: 'babel-loader' }
        ]
    }
};
