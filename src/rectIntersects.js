const X = 0;
const Y = 1;
const TOP_LEFT = 0;
const BOTTOM_RIGHT = 1;

/**
 * Determines if two rectangles intersect. Here a rectangle is defined
 * by its upper left and lower right corners.
 *
 * @param {Number} r1x1 rectangle 1, left x position
 * @param {Number} r1y1 rectangle 1, top y position
 * @param {Number} r1x2 rectangle 1, right x position
 * @param {Number} r1y2 rectangle 1, bottom y position
 * @param {Number} r2x1 rectangle 2, left x position
 * @param {Number} r2y1 rectangle 2, top y position
 * @param {Number} r2x2 rectangle 2, right x position
 * @param {Number} r2y2 rectangle 2, bottom y position
 *
 * @return {Boolean} true if the rectangles intersect, false otherwise
 */
export default function rectIntersects(rect1, rect2) {
  return (rect1[TOP_LEFT][X] <= rect2[BOTTOM_RIGHT][X] &&
          rect2[TOP_LEFT][X] <= rect1[BOTTOM_RIGHT][X] &&
          rect1[TOP_LEFT][Y] <= rect2[BOTTOM_RIGHT][Y] &&
          rect2[TOP_LEFT][Y] <= rect1[BOTTOM_RIGHT][Y]);
}
