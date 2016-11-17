const X = 0;
const Y = 1;

/**
 * Rotate a point ([x, y]) around an origin ([x, y]) by theta radians
 *
 * @param {Number[]} point [x, y]
 * @param {Number} thetaRadians How many radians to rotate the point around origin
 * @param {Number[]} [origin] [x, y] (defaults to [0, 0])
 *
 * @return {Number[]} The rotated point [x, y]
 */
export default function rotate(point, thetaRadians, origin = [0, 0]) {
  const rotatedEndX = origin[X] +
    (point[X] - origin[X]) * Math.cos(thetaRadians) -
    (point[Y] - origin[Y]) * Math.sin(thetaRadians);
  const rotatedEndY = origin[Y] +
    (point[X] - origin[X]) * Math.sin(thetaRadians) +
    (point[Y] - origin[Y]) * Math.cos(thetaRadians);

  return [rotatedEndX, rotatedEndY];
}
