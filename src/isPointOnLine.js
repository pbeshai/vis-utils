import distance from './distance';

export default function isPointOnLine(line, point) {
  const epsilon = 1e-10;
  return Math.abs((distance(line[0], point) + distance(line[1], point)) -
                   distance(line[0], line[1])) < epsilon;
}
