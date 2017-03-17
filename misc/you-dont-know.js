/**
 * Created by skull on 10/5/16.
 */

// Values & Types
var a;
console.log(typeof a);               // "undefined"

a = "hello world";
console.log(typeof a);               // "string"

a = 42;
console.log(typeof a);               // "number"

a = true;
console.log(typeof a);               // "boolean"

a = null;
console.log(typeof a);               // "object" -- weird, bug

a = undefined;
console.log(typeof a);               // "undefined"

a = {b: "c"};
console.log(typeof a);               // "object"

// Objects
var obj = {
    a: "hello world",
    b: 42,
    c: true
};

console.log(obj.a);      // "hello world"
console.log(obj.b);      // 42
console.log(obj.c);      // true

console.log(obj["a"]);   // "hello world"
console.log(obj["b"]);   // 42
console.log(obj["c"]);   // true

obj = {
    a: "hello world",
    b: 42
};

b = "a";

console.log(obj[b]);         // "hello world"
console.log(obj["b"]);       // 42

// Arrays
var arr = [
    "hello world",
    42,
    true
];

console.log(arr[0]);         // "hello world"
console.log(arr[1]);         // 42
console.log(arr[2]);         // true
console.log(arr.length);     // 3

console.log(typeof arr);     // "object"

// Built-In Type Methods

a = "hello world";
b = 3.14159;

console.log(a.length);               // 11
console.log(a.toUpperCase());        // "HELLO WORLD"
console.log(b.toFixed(4));           // "3.1416"

// Truthy & Falsy

if (!"") {
    console.log('\"\" is falsy');
}

if (!NaN) {
    console.log('NaN is falsy');
}

if (!0) {
    console.log('0 is falsy');
}

if (!-0) {
    console.log('-0 is falsy');
}

if (!null) {
    console.log('null is falsy');
}

if (!undefined) {
    console.log('undefined is falsy');
}

if (!false) {
    console.log('false is falsy');
}

if ("hello") {
    console.log('\"hello\" is truthy');
}

if (42) {
    console.log('42 is truthy');
}

if (true) {
    console.log('true is truthy');
}

if ([]) {
    console.log('[] is truthy');
}

if ([1, 2, 3]) {
    console.log('[1, 2, 3] is truthy');
}

if ({}) {
    console.log('\{\} is truthy');
}

if ({a: 42}) {
    console.log('\{a: 42\} is truthy');
}

if (function foo() {
    }) {
    console.log('function foo() {} is truthy');
}

// Equality
a = "42";
var b = 42;

console.log(a == b);         // true
console.log(a === b);        // false

// Hoisting
a = 2;

foo();                  // works because `foo()`
                        // declaration is "hoisted"

function foo() {
    a = 3;
    console.log(a);   // 3
    var a;              // declaration is "hoisted"
                        // to the top of `foo()`
}

console.log(a);   // 2

// Nested Scopes
function foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;

            console.log(a, b, c); // 1 2 3
        }

        baz();
        console.log(a, b);        // 1 2
    }

    bar();
    console.log(a);               // 1
}

foo();