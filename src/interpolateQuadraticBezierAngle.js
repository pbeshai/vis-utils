const X = 0;
const Y = 1;

/**
 * Given the definition of a quadratic bezier: a start point, control point,
 * and end point, return a function that interpolates the angle on the curve.
 * For example, at t = 0, the interpolator returns the angle at the start
 * point, at t = 0.5, it returns the angle midway through the curve and at
 * t = 1 it returns the angle at the end of the curve (useful for things like
 * arrowheads). The angles are in degrees.
 *
 * @param {Number[]} start The start point ([x, y])
 * @param {Number[]} control The control point ([x, y])
 * @param {Number[]} end The end point ([x, y])
 *
 * @return {Function} the interpolating function that maps from 0 <= t <= 1 to
 *   an angle in degrees along the curve.
 */
export default function interpolateQuadraticBezierAngle(start, control, end) {
  // B'(t) = 2(1 - t)(P1 - P0) + 2t(P2 - P1)
  // 0 <= t <= 1 --> the angle on the curve at that point
  return function interpolator(t) {
    const tangentX = (2 * (1 - t) * (control[X] - start[X])) +
                     (2 * t * (end[X] - control[X]));
    const tangentY = (2 * (1 - t) * (control[Y] - start[Y])) +
                     (2 * t * (end[Y] - control[Y]));

    return Math.atan2(tangentY, tangentX) * (180 / Math.PI);
  };
}
