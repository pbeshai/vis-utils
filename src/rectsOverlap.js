import rectsOverlapPoints from './rectsOverlapPoints';

/**
 * Determines if two rectangles overlap by looking at two points and
 * width and height measurements: (r1x, r1y) + r1width + r1height
 * for rectangle 1 and similarly for rectangle2.
 *
 * @param {Number} r1x1 rectangle 1, left x position
 * @param {Number} r1y1 rectangle 1, top y position
 * @param {Number} r1w  rectangle 1, width
 * @param {Number} r1h  rectangle 1, height
 * @param {Number} r2x1 rectangle 2, left x position
 * @param {Number} r2y1 rectangle 2, top y position
 * @param {Number} r2w  rectangle 2, width
 * @param {Number} r2h  rectangle 2, height
 *
 * @return {Boolean} true if the rectangles overlap, false otherwise
 */
export default function rectsOverlap(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {
  return rectsOverlapPoints(r1x, r1y, r1x + Math.abs(r1w), r1y + Math.abs(r1h),
    r2x, r2y, r2x + r2w, r2y + r2h);
}
