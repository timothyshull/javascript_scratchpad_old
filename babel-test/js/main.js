/*jslint esnext: true, globalstrict: true*/
'use strict';
import Point from './Point.js';
import $ from './vendor/jquery.js';
import { zip } from 'lodash';
var body = $('body');
body.append($('<p>').text('Good Point: ' + new Point(1, 23)));
body.append($('<p>').text(zip(['1', '2'], ['a', 'b'])));
body.append($('<p>').text(0xFF));
body.append($('<p>').text(0b11));
body.append($('<p>').text(0o10));

let first = 'Jane';
let last = 'Doe';
body.append($('<p>').text(`Hello ${first} ${last}!`));

let multiline = `
This is
a string
with multiple
lines`;

body.append($('<p>').text(multiline));
body.append($('<p>').text('hello'.startsWith('hell')));
body.append($('<p>').text('hello'.endsWith('ello')));
body.append($('<p>').text('hello'.includes('ell')));
body.append($('<p>').text('doo '.repeat(3)));
body.append($('<p>').text('\uD83D\uDE80'));
body.append($('<p>').text());
body.append($('<p>').text());
body.append($('<p>').text());
body.append($('<p>').text());
body.append($('<p>').text());
body.append($('<p>').text());
body.append($('<p>').text());
body.append($('<p>').text());








