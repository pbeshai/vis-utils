import rectContains from './rectContains';
import rectIntersects from './rectIntersects';

/**
 * Filters the elements in the passed in quadtree to those that are contained within
 * the specified rectangle.
 *
 * @param {Object} quadtree The input data as a d3-quadtree to filter
 * @param {Number[][]} rect The rectangle, a pair of two points [[x, y], [x, y]]
 * @param {Function} x Function that maps a point in the array to its x value
 *   (defaults to d => d[0])
 * @param {Function} y Function that maps a point in the array to its y value
 *   (defaults to d => d[1])
 *
 * @return {Array} The subset of the input data that is contained within the
 *   rectangle
 */
export default function filterInRectFromQuadtree(quadtree, rect, x = d => d[0], y = d => d[1]) {
  const filtered = [];
  quadtree.visit((node, x1, y1, x2, y2) => {
    // check that quadtree node intersects
    const overlaps = rectIntersects(rect, [[x1, y1], [x2, y2]]);

    // skip if it doesn't overlap the brush
    if (!overlaps) {
      return true;
    }

    // if this is a leaf node (node.length is falsy), verify it is within the brush
    // we have to do this since an overlapping quadtree box does not guarantee
    // that all the points within that box are covered by the brush.
    if (!node.length) {
      const d = node.data;
      if (rectContains(rect, [x(d), y(d)])) {
        filtered.push(d);
      }
    }

    // return false so that we traverse into branch (only useful for non-leaf nodes)
    return false;
  });

  return filtered;
}
