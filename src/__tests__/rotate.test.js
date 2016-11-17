const tape = require('tape');
const rotate = require('../rotate').default;

// more lenient equals to handle floating point rounding error
function approximatelyEqual(p1, p2) {
  const epsilon = 1e-10;
  return Math.abs(p1[0] - p2[0]) < epsilon &&
         Math.abs(p1[1] - p2[1]) < epsilon;
}

tape('rotate() produces the correct value when the origin is [0, 0]', (t) => {
  t.ok(approximatelyEqual(rotate([1, 0], Math.PI / 2), [0, 1]));
  t.ok(approximatelyEqual(rotate([0, 1], Math.PI / 2), [-1, 0]));
  t.end();
});

tape('rotate() produces the correct value when the origin is not [0, 0]', (t) => {
  t.ok(approximatelyEqual(rotate([2, 4], Math.PI / 2, [1, 4]), [1, 5]));
  t.end();
});
