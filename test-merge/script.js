var _ = window._,
    model1 = {
        cid: 15,
        attributes: {
            type: "ha",
            host1: "hostname1",
            host2: "hostname2",
            vipname: "host-vip",
            privatenet: "172.22.22.1"
        }
    },
    model2 = {
        cid: 17,
        attributes: {
            type: "pnet",
            hostname: "hostname3",
            ip: "192.168.108.0",
            privatenet: "172.22.22.0"
        }
    },
    selectiveMerge = function selectiveMerge(obj1, obj2) {
        var returnObj;

        returnObj = _.merge(obj1, obj2, function (a, b, key) {
            console.dir(arguments);
            console.dir(a);
            console.dir(b);
            return b;
        });

        return returnObj;
    },
    attributesMerge = function attributesMerge(newModel, oldModel) {
        var keys = _.keys(oldModel.attributes);

        _.forEach(keys, function (key) {
            switch (key) {
                case "type":
                    break;
                case "host1":
                    if (_.has(newModel.attributes, key)) {
                        newModel.attributes[key] = oldModel.attributes[key];
                    } else if (_.has(newModel.attributes, "hostname")) {
                        newModel.attributes.hostname = oldModel.attributes[key];
                    }
                    break;
                case "hostname":
                    console.log("in hostname");
                    if (_.has(newModel.attributes, key)) {
                        newModel.attributes[key] = oldModel.attributes[key];
                    } else if (_.has(newModel.attributes, "host1")) {
                        newModel.attributes.host1 = oldModel.attributes[key];
                    }
                    break;
                default:
                    if (_.has(newModel.attributes, key)) {
                        newModel.attributes[key] = oldModel.attributes[key];
                    }
                    break;
            }
        });

        return newModel;
    };

console.dir(attributesMerge(model1, model2));

// Sample configuration for automatic routing: hostname1 hostname2
// Sample configuration for manual routing: hostname1,192.168.108.0 hostname1,192.168.108.0,172.22.22.0
// Sample configuration for high availability: host1,host2,vipname=host-vip,privatenet=172.22.22.0 host3,host4,vipname=host2-vip,privatenet=172.22.22.0
//If no networks are specified, the setting will default to all ip routes on the node --- hostname,network1,network2 ---