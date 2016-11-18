import rectContains from './rectContains';

/**
 * Filters the elements in the passed in array to those that are contained within
 * the specified rectangle.
 *
 * @param {Array} array The input array to filter
 * @param {Number[][]} rect The rectangle, a pair of two points [[x, y], [x, y]]
 * @param {Function} x Function that maps a point in the array to its x value
 *   (defaults to d => d[0])
 * @param {Function} y Function that maps a point in the array to its y value
 *   (defaults to d => d[1])
 *
 * @return {Array} The subset of the input array that is contained within the
 *   rectangle
 */
export default function filterInRect(array, rect, x = d => d[0], y = d => d[1]) {
  return array.filter(d => rectContains(rect, [x(d), y(d)]));
}
