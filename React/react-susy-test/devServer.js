var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    // contentBase: contentBase,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
    // stats: {colors: true},
    // contentBase: 'http://localhost:8090/',
    // publicPath: 'http://localhost:8080/js/',
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});


// server.app.use(function pushStateHook(req, res, next) {
//     var ext = path.extname(req.url);
//     if ((ext === '' || ext === '.html') && req.url !== '/') {
//         req.pipe(request(localURL)).pipe(res);
//     } else {
//         next();
//     }
// });
