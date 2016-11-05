/**
 * Helper function to find the item that matches this value.
 * Since it assumes the data is unsorted, it does a linear scan O(n).
 *
 * @param {Array} array the input array to search
 * @param {Number} value the value to match against (typically pixels)
 * @param {Function} accessor applied to each item in the array to get equivalent
 *   value to compare against
 * @return {Any} The item in the array that has this value or null if not found
 */
export default function findEqualUnsorted(array, value, accessor = d => d) {
  return array.find(d => accessor(d) === value);
}
