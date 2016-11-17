import { extent, quantile, bisector } from 'd3-array';

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
  const bisectValue = bisector(valueAccessor).left;

  // limit to minPercentile if passed in
  if (minPercentile != null) {
    // get the value at the percentile
    const minQuantileValue = quantile(array, minPercentile, valueAccessor);
    const quantileInsertIndex = Math.max(0, bisectValue(array, minQuantileValue));

    // this may not exist in the array, so find the nearest point to it
    // and use that.
    minValue = valueAccessor(array[quantileInsertIndex]);
  }

  // limit to maxPercentile if passed in
  if (maxPercentile != null) {
    const maxQuantileValue = quantile(array, maxPercentile, valueAccessor);
    const quantileInsertIndex = Math.min(array.length - 1, bisectValue(array, maxQuantileValue));

    maxValue = valueAccessor(array[quantileInsertIndex]);

    // ensure we do not get a value bigger than the quantile value
    if (maxValue > maxQuantileValue && quantileInsertIndex > 0) {
      maxValue = valueAccessor(array[quantileInsertIndex - 1]);
    }
  }

  return [minValue, maxValue];
}
