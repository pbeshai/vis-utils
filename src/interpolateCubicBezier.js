const X = 0;
const Y = 1;

/**
 * Given the definition of a cubic bezier: a start point, two control points,
 * and end point, return a function that interpolates between the start point
 * and end point following the curve.
 *
 * @param {Number[]} start The start point ([x, y])
 * @param {Number[]} control1 The first control point ([x, y])
 * @param {Number[]} control2 The second control point ([x, y])
 * @param {Number[]} end The end point ([x, y])
 *
 * @return {Function} the interpolating function that maps from 0 <= t <= 1 to
 *   a point on the curve.
 */
export default function interpolateCubicBezier(start, control1, control2, end) {
  // B(t) = (1 - t)^3P0 + 3(1 - t)^2tP1 + 3(1 - t)t^2P2 + t^3P3
  // 0 <= t <= 1 --> a point on the curve
  return function interpolator(t) {
    return [
      (Math.pow(1 - t, 3) * start[X]) +
      (3 * Math.pow(1 - t, 2) * t * control1[X]) +
      (3 * (1 - t) * Math.pow(t, 2) * control2[X]) +
      (Math.pow(t, 3) * end[X]),
      (Math.pow(1 - t, 3) * start[Y]) +
      (3 * Math.pow(1 - t, 2) * t * control1[Y]) +
      (3 * (1 - t) * Math.pow(t, 2) * control2[Y]) +
      (Math.pow(t, 3) * end[Y]),
    ];
  };
}
