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
 * @param {Number[][]} rect The rectangle, a pair of two points
 *    [[x, y], [x, y]]
 * @param {Number[]} point The point ([x, y])
 *
 * @return {Boolean} true if the point is inside the rectangle, false otherwise
 */
export default function rectContains(rect, point) {
  return rect[TOP_LEFT][X] <= point[X] && point[X] <= rect[BOTTOM_RIGHT][X] &&
         rect[TOP_LEFT][Y] <= point[Y] && point[Y] <= rect[BOTTOM_RIGHT][Y];
}
