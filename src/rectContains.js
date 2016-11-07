const X = 0;
const Y = 1;
const TOP_LEFT = 0;
const BOTTOM_RIGHT = 1;

/**
 * Determines if a point is inside a rectangle. The rectangle is
 * defined by two points:
 *   - the upper left corner (rx1, ry1)
 *   - the bottom right corner (rx2, ry2)
 *
 * @param {Number} rx1 rectangle left x position
 * @param {Number} ry1 rectangle top y position
 * @param {Number} rx2 rectangle right x position
 * @param {Number} ry2 rectangle bottom y position
 * @param {Number} px  point x position
 * @param {Number} py  point y position
 *
 * @return {Boolean} true if the point is inside the rectangle, false otherwise
 */
export default function rectContains(rect, px, py) {
  return rect[TOP_LEFT][X] <= px && px <= rect[BOTTOM_RIGHT][X] &&
         rect[TOP_LEFT][Y] <= py && py <= rect[BOTTOM_RIGHT][Y];
}
