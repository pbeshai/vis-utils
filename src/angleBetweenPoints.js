const X = 0;
const Y = 1;

export default function angleBetweenPoints(pointA, pointB) {
  const deltaY = pointB[Y] - pointA[Y];
  const deltaX = pointB[X] - pointA[X];

  const radians = Math.atan2(deltaY, deltaX);

  return radians < 0 ? (2 * Math.PI) + radians : radians;
}
