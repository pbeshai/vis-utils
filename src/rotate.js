/**
 * Helper function to rotate a point around an origin by theta radians
 */
export default function rotate(origin, point, thetaRadians) {
  const [originX, originY] = origin;
  const [pointX, pointY] = point;

  const rotatedEndX = originX +
    (pointX - originX) * Math.cos(thetaRadians) -
    (pointY - originY) * Math.sin(thetaRadians);
  const rotatedEndY = originY +
    (pointX - originX) * Math.sin(thetaRadians) +
    (pointY - originY) * Math.cos(thetaRadians);

  return [rotatedEndX, rotatedEndY];
}
