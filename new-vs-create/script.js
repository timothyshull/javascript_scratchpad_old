/*global console*/
(function () {
    'use strict';
    var Test,
        AnotherTest,
        test1,
        test2,
        test3;

    Test = function () {
        this.x = 10;
        this.y = [1, 2, 3];
    };

    AnotherTest = function () {
        return Object.create(Test.prototype, {
            x: {value: 10},
            y: {value: [1, 2, 3]}
        });
    };

    Test.prototype.method = function () {return; };

    test1 = new Test();
    test2 = Object.create(Test.prototype);
    test3 = AnotherTest();

    console.dir(test1);
    console.dir(test2);
    console.dir(test3);
}());

