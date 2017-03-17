const tape = require('tape');
const interpolateCubicBezierAngle = require('../build/vis-utils').interpolateCubicBezierAngle;

// more lenient equals to handle floating point rounding error
function approximatelyEqual(p1, p2) {
  const epsilon = 1e-10;
  return Math.abs(p1 - p2) < epsilon;
}

tape('interpolateCubicBezierAngle() produces the correct value', (t) => {
  const interpolator = interpolateCubicBezierAngle([0, 70], [40, 180], [160, 20], [200, 100]);
  t.ok(approximatelyEqual(interpolator(0), 70.01689347810003));
  t.ok(approximatelyEqual(interpolator(0.5), -22.109448343751673));
  t.ok(approximatelyEqual(interpolator(1), 63.43494882292201));
  t.end();
});
