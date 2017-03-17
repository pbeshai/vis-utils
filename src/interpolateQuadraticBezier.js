const X = 0;
const Y = 1;

/**
 * Given the definition of a quadratic bezier: a start point, control point,
 * and end point, return a function that interpolates between the start point
 * and end point following the curve.
 *
 * @param {Number[]} start The start point ([x, y])
 * @param {Number[]} control The control point ([x, y])
 * @param {Number[]} end The end point ([x, y])
 *
 * @return {Function} the interpolating function that maps from 0 <= t <= 1 to
 *   a point on the curve.
 */
export default function interpolateQuadraticBezier(start, control, end) {
  // B(t) = (1 - t)^2P0 + 2(1 - t)tP1 + t^2P2
  // 0 <= t <= 1 --> a point on the curve
  return function interpolator(t) {
    return [
      (Math.pow(1 - t, 2) * start[X]) +
      (2 * (1 - t) * t * control[X]) +
      (Math.pow(t, 2) * end[X]),
      (Math.pow(1 - t, 2) * start[Y]) +
      (2 * (1 - t) * t * control[Y]) +
      (Math.pow(t, 2) * end[Y]),
    ];
  };
}
