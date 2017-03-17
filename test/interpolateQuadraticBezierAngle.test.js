const tape = require('tape');
const interpolateQuadraticBezierAngle = require('../build/vis-utils').interpolateQuadraticBezierAngle;

// more lenient equals to handle floating point rounding error
function approximatelyEqual(p1, p2) {
  const epsilon = 1e-10;
  return Math.abs(p1 - p2) < epsilon;
}

tape('interpolateQuadraticBezierAngle() produces the correct value', (t) => {
  const interpolator = interpolateQuadraticBezierAngle([0, 70], [160, 20], [200, 100]);
  t.ok(approximatelyEqual(interpolator(0), -17.35402463626132));
  t.ok(approximatelyEqual(interpolator(0.5), 8.530765609948133));
  t.ok(approximatelyEqual(interpolator(1), 63.43494882292201));
  t.end();
});
