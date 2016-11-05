/**
 * Helper function to compute distance and find the closest item
 * Since it assumes the data is unsorted, it does a linear scan O(n).
 *
 * @param {Array} array the input array to search
 * @param {Number} value the value to match against (typically pixels)
 * @param {Function} accessor applied to each item in the array to get equivalent
 *   value to compare against
 * @return {Any} The item in the array that is closest to `value`
 */
export default function findClosestUnsorted(array, value, accessor = d => d) {
  let closest = null;
  let closestDist = null;

  array.forEach((elem) => {
    const dist = Math.abs(accessor(elem) - value);
    if (closestDist == null || dist < closestDist) {
      closestDist = dist;
      closest = elem;
    }
  });

  return closest;
}
