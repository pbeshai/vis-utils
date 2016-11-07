const X = 0;
const Y = 1;
const TOP_LEFT = 0;
const BOTTOM_RIGHT = 1;

/**
 * Determines if two rectangles intersect. Here a rectangle is defined
 * by its upper left and lower right corners.
 *
 * @param {Number[][]} rect1 The first rectangle, a pair of two points
 *    [[x, y], [x, y]]
 * @param {Number[][]} rect2 The second rectangle, a pair of two points
 *    [[x, y], [x, y]]
 *
 * @return {Boolean} true if the rectangles intersect, false otherwise
 */
export default function rectIntersects(rect1, rect2) {
  return (rect1[TOP_LEFT][X] <= rect2[BOTTOM_RIGHT][X] &&
          rect2[TOP_LEFT][X] <= rect1[BOTTOM_RIGHT][X] &&
          rect1[TOP_LEFT][Y] <= rect2[BOTTOM_RIGHT][Y] &&
          rect2[TOP_LEFT][Y] <= rect1[BOTTOM_RIGHT][Y]);
}
