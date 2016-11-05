import binarySearch from 'binary-search';

/**
 * Helper function to compute distance and find the closest item
 * Since it assumes the data is sorted, it does a binary search O(log n)
 *
 * @param {Array} array the input array to search
 * @param {Number} value the value to match against (typically pixels)
 * @param {Function} accessor applied to each item in the array to get equivalent
 *   value to compare against
 * @return {Any} The item in the array that is closest to `value`
 */
export default function findClosestSorted(array, value, accessor = d => d) {
  // binary search uses the value directly in comparisons, so make sure not to
  // run the accessor on it
  let index = binarySearch(array, value, (a, b) => {
    const aValue = a === value ? value : accessor(a);
    const bValue = b === value ? value : accessor(b);
    return aValue - bValue;
  });


  // index is positive = we found it exactly
  if (index < 0) {
    // should match first element
    if (index === -1) {
      index = 0;
    } else {
      // map back to the input location since the binary search uses -(low + 1) as the result
      index = -index - 1;

      // should match last element
      if (index >= array.length) {
        index = array.length - 1;
      }
    }
  }

  // this result is always to the right, so see if the one to the left is closer
  // and use it if it is.
  let result = array[index];
  const before = array[index - 1];
  if (before != null && Math.abs(accessor(result) - value) > Math.abs(accessor(before) - value)) {
    result = before;
  }

  return result;
}
