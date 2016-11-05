/**
 * Determines if two rectangles overlap by looking at two pairs of
 * points (r1x1, r1y1), (r1x2, r1y2) for rectangle 1 and similarly
 * for rectangle2.
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
 * @return {Boolean} true if the rectangles overlap, false otherwise
 */
export default function rectsOverlapByPoints(r1x1, r1y1, r1x2, r1y2, r2x1, r2y1, r2x2, r2y2) {
  return (r1x1 <= (r2x2) &&
          r2x1 <= (r1x2) &&
          r1y1 <= (r2y2) &&
          r2y1 <= (r1y2));
}
