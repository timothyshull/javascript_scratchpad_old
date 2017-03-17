/* @flow */

function length(x) {
  return x.length;
}

var total = length('Hello') + length(null);

function length(x) {
  if (x !== null) {
    return x.length;
  } else {
    return 0;
  }
}

var total = length('Hello') + length(null);
