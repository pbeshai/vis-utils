import { interpolateArray } from 'd3-array';
import rotate from './rotate';
import pointOnLine from './pointOnLine';
import distance from './distance';

const X = 0;
const Y = 1;

/**
 * Create a curved path `d` attribute between two given points
 *
 * @param {Number[]} start the start point [x, y]
 * @param {Number[]} end the end point [x, y]
 * @param {Number} amount=0.5 How flat/peaked the line is. Corresponds to dragging
 *   the control points at an angle towards the middle of the line (1) or
 *   to the end points (0)
 * @param {Boolean} rotationDir=false Which direction to curve
 *   (true = clockwise, false = counter-clockwise)
 *
 * @return {String} The `d` attribute for a curved line between two points
 */
export default function curvedPath(start, end, amount = 0.5, rotationDir) {
  const theta = rotationDir ? -Math.PI / 4 : Math.PI / 4;

  // rotate the end point 45 degrees around the start point
  const rotatedPoint = rotate(end, theta, start);

  // scale this point to be in the middle of the line
  const midRotatedPoint = pointOnLine(start, rotatedPoint,
    (Math.sqrt(2) / 2) * distance(start, end));

  // adjust the control points to be between this rotated midpoint and the end points
  const startControlPoint = interpolateArray(start, midRotatedPoint)(amount);
  const endControlPoint = interpolateArray(end, midRotatedPoint)(amount);

  return `M${start[X]},${start[Y]}
          C${startControlPoint[X]},${startControlPoint[Y]}
           ${endControlPoint[X]},${endControlPoint[Y]}
           ${end[X]},${end[Y]}`;
}
