require.config({

    baseUrl: "scripts",
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        "backbone": {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        "handlebars.runtime": {
            exports: "Handlebars"
        },
        lodash: {
            exports: "_"
        },
        "modernizr": {
            exports: "Modernizr"
        },
        "socketio": {
            exports: "io"
        }
    },
    paths: {
        backbone: "lib/backbone",
        "handlebars.runtime": "lib/handlebars.runtime",
        jquery: "lib/jquery",
        lodash: "lib/lodash",
        modernizr: "lib/modernizr",
        socketio: "../socket.io/socket.io"
    }
});

require([
    "app/load"
]);