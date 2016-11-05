/**
 * Determines if a point is inside a rectangle. The rectangle is
 * defined by a point (rx1, ry1) and a width + height.
 *
 * @param {Number} rx1 rectangle left x position
 * @param {Number} ry1 rectangle top y position
 * @param {Number} rw  rectangle width
 * @param {Number} rh  rectangle height
 * @param {Number} px  point x position
 * @param {Number} py  point y position
 *
 * @return {Boolean} true if the point is inside the rectangle, false otherwise
 */
export default function pointInsideRect(rx1, ry1, rw, rh, px, py) {
  return rx1 <= px && px <= (rx1 + rw) &&
         ry1 <= py && py <= (ry1 + rh);
}
