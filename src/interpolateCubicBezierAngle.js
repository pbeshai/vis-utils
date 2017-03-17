const X = 0;
const Y = 1;

/**
 * Given the definition of a cubic bezier: a start point, two control points,
 * and end point, return a function that interpolates the angle on the curve.
 * For example, at t = 0, the interpolator returns the angle at the start
 * point, at t = 0.5, it returns the angle midway through the curve and at
 * t = 1 it returns the angle at the end of the curve (useful for things like
 * arrowheads). The angles are in degrees.
 *
 * @param {Number[]} start The start point ([x, y])
 * @param {Number[]} control1 The first control point ([x, y])
 * @param {Number[]} control2 The second control point ([x, y])
 * @param {Number[]} end The end point ([x, y])
 *
 * @return {Function} the interpolating function that maps from 0 <= t <= 1 to
 *   an angle in degrees along the curve.
 */
export default function interpolateCubicBezierAngle(start, control1, control2, end) {
  // B'(t) = 3(1- t)^2(P1 - P0) + 6(1 - t)t(P2 - P1) + 3t^2(P3 - P2)
  // 0 <= t <= 1 --> the angle on the curve at that point
  return function interpolator(t) {
    const tangentX = (3 * Math.pow(1 - t, 2) * (control1[X] - start[X])) +
                     (6 * (1 - t) * t * (control2[X] - control1[X])) +
                     (3 * Math.pow(t, 2) * (end[X] - control2[X]));
    const tangentY = (3 * Math.pow(1 - t, 2) * (control1[Y] - start[Y])) +
                     (6 * (1 - t) * t * (control2[Y] - control1[Y])) +
                     (3 * Math.pow(t, 2) * (end[Y] - control2[Y]));

    return Math.atan2(tangentY, tangentX) * (180 / Math.PI);
  };
}
