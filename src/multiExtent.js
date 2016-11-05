import d3 from 'd3';

/**
 * Compute the extent across an array of arrays/objects
 *
 * For example:
 * ```
 * multiExtent([[4, 3], [1, 2]], d => d);
 * > 1, 4
 * ```
 * ```
 * multiExtent([{ results: [{ x: 4 }, { x: 3 }] }, { results: [{ x: 1 }, { x: 2 }] }],
 *   d => d.x, array => array.results);
 * > 1, 4
 * ```
 *
 * @param {Array} outerArray An array of arrays or objects
 * @param {Function} [valueAccessor] How to read a value in the array (defaults to identity)
 * @param {Function} [arrayAccessor] How to read an inner array (defaults to identity)
 * @param {Number} [quantile] If provided, limits the max to this percentile value.
 * @return {Array} the extent
 */
export default function multiExtent(outerArray, valueAccessor = d => d, arrayAccessor = d => d, quantile) {
  if (!outerArray || !outerArray.length) {
    return undefined;
  }

  // flatten the arrays into one big array
  const combined = outerArray.reduce((carry, inner) => carry.concat(arrayAccessor(inner)), []);

  const extent = d3.extent(combined, valueAccessor);

  // limit to quantile if passed in
  if (quantile != null) {
    combined.sort((a, b) => valueAccessor(a) - valueAccessor(b));
    extent[1] = d3.quantile(combined, quantile, valueAccessor);
  }

  return extent;
}
