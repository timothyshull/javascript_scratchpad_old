// var resolve = require('path').resolve
var path = require('path');
var webpack = require('webpack');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    devtool: 'eval',
    entry: {
        main: getEntrySources([
            // 'webpack-dev-server/client?http://localhost:3000',
            // 'webpack/hot/only-dev-server',
            // 'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
            path.resolve('./js/main.js')
        ])
    },
    output: {
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        path: path.resolve('./public')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            // {test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/},
            // {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
                // loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime']
                // loaders: ['react-hot', 'babel'],
                // query: {
                //     presets: ['es2015', 'react']
                // }
            },
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},

            // { test: /\.css$/, loader: "style!css" },
            // { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // externals: {
    //     'react': 'React'
    // }
};


// entry:{
//     app:[
//         //'webpack-dev-server/client?http://localhost:3001',
//         //'webpack/hot/dev-server',
//         'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
//         path.resolve(appPath, '../src/client.js')
//     ],



// module.exports = {
//
//     entry: [
//         'webpack-dev-server/client?http://localhost:3000',
//         'webpack/hot/only-dev-server',
//         './src/index'
//     ],
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: 'bundle.js',
//         publicPath: '/static/'
//     },
//
//     module: {
//         loaders: [{
//             test: /\.js$/,
//             loaders: ['react-hot', 'babel'],
//             include: path.join(__dirname, 'src')
//         }]
//     }
// };