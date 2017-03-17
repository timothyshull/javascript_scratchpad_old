/*global define */
define(
    [
        "app/core",
        "modules/module1/module1",
        "modules/module1/module1.view"
    ],
    function (Core, module1, module1View) {
        "use strict";
        //register modules
        // Core.register("module1", function(sandbox){ /*...*/ });
        //start the application by starting all modules
        window.module1View = module1View;
        var view = new module1View();
        view.render();
        Core.startAll();
    }
);