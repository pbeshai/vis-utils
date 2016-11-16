import { extent, quantile } from 'd3-array';

/**
 * Compute the extent (min and max) of an array, limiting the min and the max
 * by the specified percentiles. Percentiles are values between 0 and 1.
 *
 * @param {Array} array The array to iterate over
 * @param {Function} [valueAccessor] How to read a value in the array (defaults to identity)
 * @param {Number} [minPercentile] If provided, limits the min to this percentile value (between 0 and 1).
 *   If provided, the data is sorted by taking the difference of the valueAccessor results.
 * @param {Number} [maxPercentile] If provided, limits the max to this percentile value (between 0 and 1).
 *   If provided, the data is sorted by taking the difference of the valueAccessor results.
 * @return {Array} the extent, limited by the min/max percentiles
 */
export default function extentLimited(array, valueAccessor = d => d, minPercentile, maxPercentile) {
  if (!array || !array.length) {
    return undefined;
  }

  // neither limits defined, just use d3 extent.
  if (minPercentile == null && maxPercentile == null) {
    return extent(array, valueAccessor);
  }

  array.sort((a, b) => valueAccessor(a) - valueAccessor(b));
  let minValue = array[0];
  let maxValue = array[array.length - 1];

  // limit to minPercentile if passed in
  if (minPercentile != null) {
    minValue = quantile(array, minPercentile, valueAccessor);
  }

  // limit to maxPercentile if passed in
  if (maxPercentile != null) {
    maxValue = quantile(array, maxPercentile, valueAccessor);
  }

  return [minValue, maxValue];
}
