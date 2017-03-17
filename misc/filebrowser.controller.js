define(
    [
        "utility/AppUtility",
        "modules/list-operation/ListOperationController",
        "underscore"
    ],
    function (AppUtility, ListOperationController, _) {
        "use strict";

        var controller = Object.create(ListOperationController),
            section = "vdisk-files";

        controller.controllerParameters = {
            actionRequestTypeMap: {
                "get attributes": "request-get-file-attributes",
                "change directory": "request-browse-disk"
            },
            updateRequest: "request-browse-disk",
            highlightedActions: [""],
            section: section,
            dontUpdateOnLoad: true,
            processNotification: function (payload) {
                switch (payload.type) {
                    case "request-browse-disk-result":
                        if (payload.data.status === AppUtility.Constants.Statuses.Success) {
                            this.setPath(payload.data.path);
                        }
                        break;
                }
            },
            getUpdateRequestParams: function () {
                return {
                    disk: this.sandbox.model.getDisk(),
                    path: this.sandbox.model.getPath(),
                    inode: this.sandbox.model.getInode()
                };
            },
            notificationFilter: function (payload) {
                if (payload.type === "request-browse-disk-result") {
                    return payload.data.disk === this.sandbox.model.getDisk();
                }

                if (payload.type === "request-get-file-attributes-result") {
                    return payload.data.disk === this.sandbox.model.getDisk();
                }

                return true;
            },
            init: function () {
                var columns = AppUtility.Settings.get(section + "-columns");

                if (!columns) {
                    columns = ["inode", "fileName", "showMetrics"];
                } else {
                    columns = _.pluck(columns, "name");
                }
                this.sandbox.model.viewModel.setActiveColumns(columns);
            }
        };

        _.extend(controller, {
            setDisk: function (disk) {
                this.setPath([{
                    name: disk,
                    inode: 1
                }]);

                this.sandbox.model.setDisk(disk);
            },
            setControllers: function (controllers) {
                this.sandbox.model.setControllers(controllers);
            },
            setTargets: function (targets) {
                this.sandbox.model.setTargets(targets);
            },
            changeDirectory: function (inode, path) {
                this.sandbox.notify({
                    type: "request-browse-disk",
                    data: {
                        disk: this.sandbox.model.getDisk(),
                        path: path,
                        inode: inode
                    }
                });
            },
            executeItemMainAction: function (file) {
                if (file.directory) {
                    this.changeDirectory(file.inode, this.getExtendedPath(file));
                }
            },
            setPath: function (path) {
                this.sandbox.model.setPath(path);
            },
            getExtendedPath: function (extensionDisk) {
                var result = _.clone(this.sandbox.model.getPath());
                if (extensionDisk.fileName === "..") {
                    result = result.slice(0, Math.max(1, result.length - 1));
                } else {
                    result.push({
                        name: extensionDisk.fileName,
                        inode: extensionDisk.inode
                    });
                }
                return result;
            }
        });

        return controller;
    }
);