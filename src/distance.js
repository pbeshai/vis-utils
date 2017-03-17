const X = 0;
const Y = 1;

/**
 * Calculates the distance between two points
 *
 * @param {Number[]} a The first point [x, y]
 * @param {Number[]} b The second point [x, y]
 *
 * @return {Number} The distance between the points
 */
export default function distance(a, b) {
  return Math.sqrt(Math.pow(a[X] - b[X], 2) + Math.pow(a[Y] - b[Y], 2));
}
