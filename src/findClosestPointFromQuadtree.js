import rectIntersects from './rectIntersects';
import rectContains from './rectContains';

const X = 0;
const Y = 1;

/**
 * Find the closest point to another point from a quadtree
 * Typically used to match mouse position to data stored in a quadtree
 *
 * @param {Object} quadtree The d3 quadtree
 * @param {Number[]} point The point to match closest to
 * @param {Number} matchRadius Max limit of how far a point can be
 * @param {Function} x Map from a data point in the quadtree to its x value
 * @param {Function} y Map from a data point in the quadtree to its y value
 *
 * @return {Object} The closest data point or none if no match is found.
 */
export default function findClosestToPointFromQuadtree(quadtree, point,
  matchRadius = 5) {
  let site;
  let minDistance;

  const px = point[X];
  const py = point[Y];

  const hitbox = [[px - matchRadius, py - matchRadius], [px + matchRadius, py + matchRadius]];

  const xAccessor = quadtree.x;
  const yAccessor = quadtree.y;

  // traverse the quadtree looking for the matching leaf under the hitbox
  quadtree.visit((node, x1, y1, x2, y2) => {
    // check that quadtree node intersects
    const overlaps = rectIntersects(hitbox, [[x1, y1], [x2, y2]]);

    // skip if it doesn't overlap the hitbox
    if (!overlaps) {
      return true;
    }

    // we found a leaf, see if it is the closest point
    if (!node.length) {
      // get the x, y position of the data point
      const dx = xAccessor()(node.data);
      const dy = yAccessor()(node.data);

      // is the point itself within the hitbox?
      if (rectContains(hitbox, [dx, dy])) {
        // is it closer to the hitbox than the previously set site?
        const distanceToMouse = Math.pow(dx - px, 2) + Math.pow(dy - py, 2);
        if (minDistance == null || (minDistance != null && distanceToMouse < minDistance)) {
          minDistance = distanceToMouse;
          site = node;
        }
      }
    }

    // return false to keep traversing the quadtree
    return false;
  });

  return site && site.data;
}
