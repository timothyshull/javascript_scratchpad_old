var spawnSync = require('child_process').spawnSync,
    git = spawnSync('git', ['rev-parse', 'HEAD']);

console.dir(git.stdout.toString());
