import extentLimited from './extentLimited';

/**
 * Compute the extent (min and max) across an array of arrays/objects
 *
 * For example:
 * ```
 * extentMulti([[4, 3], [1, 2]], d => d);
 * > 1, 4
 * ```
 * ```
 * extentMulti([{ results: [{ x: 4 }, { x: 3 }] }, { results: [{ x: 1 }, { x: 2 }] }],
 *   d => d.x, array => array.results);
 * > 1, 4
 * ```
 *
 * @param {Array} outerArray An array of arrays or objects
 * @param {Function} [valueAccessor] How to read a value in the array (defaults to identity)
 * @param {Function} [arrayAccessor] How to read an inner array (defaults to identity)
 * @param {Number} [minPercentile] If provided, limits the min to this percentile value (between 0 and 1).
 *   If provided, the data is sorted by taking the difference of the valueAccessor results.
 * @param {Number} [maxPercentile] If provided, limits the max to this percentile value (between 0 and 1).
 *   If provided, the data is sorted by taking the difference of the valueAccessor results.
 * @return {Array} the extent
 */
export default function extentMulti(outerArray, valueAccessor = d => d, arrayAccessor = d => d,
    minPercentile, maxPercentile) {
  if (!outerArray || !outerArray.length) {
    return undefined;
  }

  // flatten the arrays into one big array
  const combined = outerArray.reduce((carry, inner) => carry.concat(arrayAccessor(inner)), []);

  return extentLimited(combined, valueAccessor, minPercentile, maxPercentile);
}
