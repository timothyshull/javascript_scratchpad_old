/*jslint node: true*/
var path =require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'jquery': path.join(__dirname, './js/lib/jquery.js'),
            'backbone': path.join(__dirname, './js/lib/backbone.js'),
            'lodash': path.join(__dirname, './js/lib/lodash.js'),
            'templates': path.join(__dirname, './js/templates'),
            'underscore': 'lodash'
        }
    },
    module: {
        loaders: [
        {
            test: path.join(__dirname, 'js'),
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'bower-components')
            ],
            loader: 'babel-loader',
            query: { compact: false }
        },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.html$/, loader: 'html-loader' }
        ]
    }
};
