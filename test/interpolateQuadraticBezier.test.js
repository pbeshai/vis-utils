const tape = require('tape');
const interpolateQuadraticBezier = require('../build/vis-utils').interpolateQuadraticBezier;

// more lenient equals to handle floating point rounding error
function approximatelyEqual(p1, p2) {
  const epsilon = 1e-10;
  return Math.abs(p1[0] - p2[0]) < epsilon &&
         Math.abs(p1[1] - p2[1]) < epsilon;
}

tape('interpolateQuadraticBezier() produces the correct value', (t) => {
  const interpolator = interpolateQuadraticBezier([0, 70], [160, 20], [200, 100]);
  t.ok(approximatelyEqual(interpolator(0), [0, 70]));
  t.ok(approximatelyEqual(interpolator(0.5), [130, 52.5]));
  t.ok(approximatelyEqual(interpolator(1), [200, 100]));
  t.end();
});
