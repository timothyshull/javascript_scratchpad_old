/*jslint node: true*/
var webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

module.exports = {
    entry: "./js/script.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] }),
        cssnano
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: true,
            noDeadCode: true
        })
    ]
};