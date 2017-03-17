const tape = require('tape');
const rectIntersects = require('../build/vis-utils').rectIntersects;

tape('rectIntersects() correctly overlapping rectangles', (t) => {
  t.ok(rectIntersects([[1, 1], [4, 4]], [[2, 0], [3, 3]])); // top edge
  t.ok(rectIntersects([[1, 1], [4, 4]], [[2, 2], [5, 3]])); // right edge
  t.ok(rectIntersects([[1, 1], [4, 4]], [[2, 3], [3, 5]])); // bottom edge
  t.ok(rectIntersects([[1, 1], [4, 4]], [[0, 2], [3, 3]])); // left edge
  t.ok(rectIntersects([[1, 1], [4, 4]], [[2, 2], [3, 3]])); // contained inside
  t.ok(rectIntersects([[2, 2], [3, 3]], [[1, 1], [4, 4]])); // contained inside reversed
  t.ok(rectIntersects([[1, 1], [4, 4]], [[0, 0], [1, 1]])); // NW corner overlap
  t.ok(rectIntersects([[1, 1], [4, 4]], [[4, 0], [5, 1]])); // NE corner overlap
  t.ok(rectIntersects([[1, 1], [4, 4]], [[4, 4], [5, 5]])); // SE corner overlap
  t.ok(rectIntersects([[1, 1], [4, 4]], [[0, 4], [1, 5]])); // SW corner overlap

  t.end();
});

tape('rectIntersects() correctly detects non-overlapping rectangles', (t) => {
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[0, 0], [1, 1]])); // NW
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[3, 0], [5, 1]])); // N
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[7, 0], [8, 1]])); // NE
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[7, 3], [8, 5]])); // E
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[7, 7], [8, 8]])); // SE
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[3, 7], [5, 8]])); // S
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[0, 7], [1, 8]])); // SW
  t.notOk(rectIntersects([[2, 2], [6, 6]], [[0, 3], [1, 5]])); // W
  t.end();
});
