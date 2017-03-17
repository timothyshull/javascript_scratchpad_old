//function Class() {
//    SuperClass.call(this);
//}
//
//if (!(this instanceof Class)) {
//    return new Class();
//}
//
//or
//
//var self = this instanceof User ? this : Object.create(User.prototype);
//return self;
//
//function Class(x) {
//    this.x = x;
//    this.otherState = [];
//}
//
//Class.prototype.method = function () {
//    return;
//};
//
//Class.prototype = {
//    method1: function () {return; },
//    method2: function () {return; }
//};
//
//Object.create(Class.prototype, {
//    x: {value: 10},
//    y: {value: [1, 2, 3]}
//});

var SuperClass1,
    SuperClass2,
    SuperClass3,
    test11,
    test12,
    test13,
    test21,
    test22,
    test23,
    test24,
    test31,
    test32,
    test33,
    test34;

var SuperClass1 = function () {
    "use strict";
    this.j = 2;
    this.i = 10;
};

SuperClass1.prototype = {
    class1method: function (num) {
        "use strict";
        this.x = num;
    }
};

//test11 = Object.create(SuperClass1.call(this));
test11 = new SuperClass1();
test12 = Object.create(SuperClass1.prototype);
test13 = Object.create(SuperClass1);

SuperClass2 = function () {
    "use strict";
    var self;
    SuperClass1.call(this);
    self = this instanceof SuperClass2 ? this : Object.create(SuperClass2.prototype);
    self.x = 3;
    self.y = 9;
    return self;
};

SuperClass2.prototype = {
    class2method: function (num) {
        "use strict";
        this.x = num;
    }
};

test21 = Object.create(new SuperClass2());
test22 = Object.create(SuperClass2.prototype);
test23 = Object.create(SuperClass2);
test24 = new SuperClass2();

SuperClass3 = function () {
    "use strict";
    if (!(this instanceof SuperClass3)) {
        return new SuperClass3();
    }
    SuperClass1.call(this);
    this.x = 3;
    this.y = 9;
};

SuperClass3.prototype = Object.create(SuperClass1.prototype);

SuperClass3.prototype.class3method = function (num) {
    "use strict";
    this.x = num;
};


test31 = Object.create(new SuperClass3());
test32 = Object.create(SuperClass3.prototype);
test33 = Object.create(SuperClass3);
test34 = new SuperClass3();

console.dir(test11);
console.dir(test12);
console.dir(test13);
console.dir(test21);
console.dir(test22);
console.dir(test23);
console.dir(test31);
console.dir(test32);
console.dir(test33);
console.dir(test34);

test11 = new SuperClass1();
test12 = Object.create(SuperClass1.prototype);
test13 = Object.create(SuperClass1);

console.dir(test11);
console.dir(test12);
console.dir(test13);

/**
 * Notes:
 * Calling .call in the constructor does not set up the prototype chain...it just passes the instance state of the super to the next instance
 * Process - in constructor, if it inherits call Super.call(this), then set the protoype = to a clone of the Super outside using Object.create(Super.prototype) and then extend or attach new methods to the prototype
 * If you just set the prototype = to the prototype of the super then
 * Only use Object.create(Class.prototype) with object.create or Object.create with an already instantiated object
 * Object.create(Class.prototype) just attaches the methods of the prototype to the object,
 * new Class() attaches the methods of the Super and attaches the instance state
 * In the new agnostic check - if you want it to construct the object with instance state use return new Class() otherwise use Object.create(Class.prototype)
 *
 */


