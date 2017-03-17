function View(name, options) {
    var opts = options || {};

    this.defaultEngine = opts.defaultEngine;
    this.ext = extname(name);
    this.name = name;
    this.root = opts.root;

    if (!this.ext && !this.defaultEngine) {
        throw new Error('No default engine was specified and no extension was provided.');
    }

    var fileName = name;

    if (!this.ext) {
        // get extension from default engine name
        this.ext = this.defaultEngine[0] !== '.'
            ? '.' + this.defaultEngine
            : this.defaultEngine;

        fileName += this.ext;
    }

    if (!opts.engines[this.ext]) {
        // load engine
        opts.engines[this.ext] = require(this.ext.substr(1)).__express;
    }

    // store loaded engine
    this.engine = opts.engines[this.ext];

    // lookup path
    this.path = this.lookup(fileName);
}

View.prototype.lookup = function lookup(name) {
    var path;
    var roots = [].concat(this.root);

    for (var i = 0; i < roots.length && !path; i++) {
        var root = roots[i];

        // resolve the path
        var loc = resolve(root, name);
        var dir = dirname(loc);
        var file = basename(loc);

        // resolve the file
        path = this.resolve(dir, file);
    }

    return path;
};

View.prototype.render = function render(options, callback) {
    this.engine(this.path, options, callback);
};