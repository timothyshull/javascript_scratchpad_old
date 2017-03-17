/*jslint esnext: true, globalstrict: true*/
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _PointJs = require('./Point.js');

var _PointJs2 = _interopRequireDefault(_PointJs);

var _vendorJqueryJs = require('./vendor/jquery.js');

var _vendorJqueryJs2 = _interopRequireDefault(_vendorJqueryJs);

var _lodash = require('lodash');

var body = (0, _vendorJqueryJs2['default'])('body');
body.append((0, _vendorJqueryJs2['default'])('<p>').text('Good Point: ' + new _PointJs2['default'](1, 23)));
body.append((0, _vendorJqueryJs2['default'])('<p>').text((0, _lodash.zip)(['1', '2'], ['a', 'b'])));
body.append((0, _vendorJqueryJs2['default'])('<p>').text(0xFF));
body.append((0, _vendorJqueryJs2['default'])('<p>').text(3));
body.append((0, _vendorJqueryJs2['default'])('<p>').text(8));

var first = 'Jane';
var last = 'Doe';
body.append((0, _vendorJqueryJs2['default'])('<p>').text('Hello ' + first + ' ' + last + '!'));

var multiline = '\nThis is\na string\nwith multiple\nlines';

body.append((0, _vendorJqueryJs2['default'])('<p>').text(multiline));
body.append((0, _vendorJqueryJs2['default'])('<p>').text('hello'.startsWith('hell')));
body.append((0, _vendorJqueryJs2['default'])('<p>').text('hello'.endsWith('ello')));
body.append((0, _vendorJqueryJs2['default'])('<p>').text('hello'.includes('ell')));
body.append((0, _vendorJqueryJs2['default'])('<p>').text('doo '.repeat(3)));
body.append((0, _vendorJqueryJs2['default'])('<p>').text('🚀'));
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());
body.append((0, _vendorJqueryJs2['default'])('<p>').text());

//# sourceMappingURL=babel-out.js.map