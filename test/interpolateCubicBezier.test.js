const tape = require('tape');
const interpolateCubicBezier = require('../build/vis-utils').interpolateCubicBezier;

// more lenient equals to handle floating point rounding error
function approximatelyEqual(p1, p2) {
  const epsilon = 1e-10;
  return Math.abs(p1[0] - p2[0]) < epsilon &&
         Math.abs(p1[1] - p2[1]) < epsilon;
}

tape('interpolateCubicBezier() produces the correct value', (t) => {
  const interpolator = interpolateCubicBezier([0, 70], [40, 180], [160, 20], [200, 100]);
  t.ok(approximatelyEqual(interpolator(0), [0, 70]));
  t.ok(approximatelyEqual(interpolator(0.5), [100, 96.25]));
  t.ok(approximatelyEqual(interpolator(1), [200, 100]));
  t.end();
});
