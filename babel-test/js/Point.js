/*jslint esnext: true, globalstrict: true*/
'use strict';
class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}
export default Point;