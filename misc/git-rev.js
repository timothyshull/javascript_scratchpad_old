spawn = require('child_process').spawn,
         git = spawn('git', ['rev-parse', 'HEAD']);

module.exports = function (callback) {
    git.stdout.on('data', function (data) {
        callback.call(data);
    });
};

