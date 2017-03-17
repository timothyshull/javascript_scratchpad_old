/*global define, Core */
define(
    [
        "app/sandbox"
    ],
    function (Sandbox) {
        "use strict";
        var Core, coreReference;

        Core = function () {
            var moduleData = {};
            return {
                register: function (moduleId, creator) {
                    moduleData[moduleId] = {
                        creator: creator,
                        instance: null
                    };
                },
                start: function (moduleId) {
                    moduleData[moduleId].instance = moduleData[moduleId].creator(new Sandbox(this));
                    moduleData[moduleId].instance.init();
                },
                stop: function (moduleId) {
                    var data = moduleData[moduleId];
                    if (data.instance) {
                        data.instance.destroy();
                        data.instance = null;
                    }
                },
                startAll: function () {
                    var moduleId;
                    for (moduleId in moduleData) {
                        if (moduleData.hasOwnProperty(moduleId)) {
                            this.start(moduleId);
                        }
                    }
                },
                stopAll: function () {
                    var moduleId;
                    for (moduleId in moduleData) {
                        if (moduleData.hasOwnProperty(moduleId)) {
                            this.stop(moduleId);
                        }
                    }
                }
            };
        };

        coreReference = new Core();
        return coreReference;
    }
);