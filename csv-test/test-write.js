var inputFunc = require('./write-csv.js'),
    //inputObj = {
    //    request: 'test-request',
    //    cmdArgs: [1, 'arg2'],
    //    key1: "value1",
    //    key2: ['val2', 3]
    //};
    inputObj = {
        request: 'test-request',
        cmdArgs: [1, 'arg2'],
        key1: {
            arg5: "val5",
            arg6: "val6"
        },
        key2: ['val2', 3]
    };

inputFunc(inputObj, './test.input.001');