import distance from './distance';

const X = 0;
const Y = 1;

/**
 * Finds a point on a line (as defined by two points) at a given length
 *
 * @param {Number[]} startPoint The first point [x, y]
 * @param {Number[]} endPoint The second point [x, y]
 * @param {Number} length How far along the line the point will be
 *
 * @return {Number[]} The point on the line at the specified length
 */
export default function pointOnLine(start, end, length) {
  const deltaLength = distance(start, end);

  return [
    start[X] + ((end[X] - start[X]) * (length / deltaLength)),
    start[Y] + ((end[Y] - start[Y]) * (length / deltaLength)),
  ];
}
