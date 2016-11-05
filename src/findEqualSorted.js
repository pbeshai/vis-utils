import binarySearch from 'binary-search';

/**
 * Helper function to find the item that matches this value.
 * Since it assumes the data is sorted, it does a binary search O(log n)
 *
 * @param {Array} array the input array to search
 * @param {Number} value the value to match against (typically pixels)
 * @param {Function} accessor applied to each item in the array to get equivalent
 *   value to compare against
 * @return {Any} The item in the array that has this value or null if not found
 */
export default function findEqualSorted(array, value, accessor = d => d) {
  // binary search uses the value directly in comparisons, so make sure not to
  // run the accessor on it
  const index = binarySearch(array, value, (a, b) => {
    const aValue = a === value ? value : accessor(a);
    const bValue = b === value ? value : accessor(b);
    return aValue - bValue;
  });
  return array[index];
}

