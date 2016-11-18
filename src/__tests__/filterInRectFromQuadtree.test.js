const tape = require('tape');
const quadtree = require('d3-quadtree').quadtree;
const filterInRectFromQuadtree = require('../filterInRectFromQuadtree').default;

tape('filterInRectFromQuadtree() filters values in the rectangle', (t) => {
  const data = [[1, 2], [2, 3], [15, 12], [30, 40], [20, 19], [5, 6]];
  const qt = quadtree().addAll(data);
  const rect = [[10, 10], [20, 20]];

  t.deepEqual(filterInRectFromQuadtree(qt, rect), [[15, 12], [20, 19]]);
  t.end();
});

tape('filterInRectFromQuadtree() handles matching no data', (t) => {
  const data = [[1, 2], [2, 3], [5, 6]];
  const qt = quadtree().addAll(data);
  const rect = [[10, 10], [20, 20]];

  t.deepEqual(filterInRectFromQuadtree(qt, rect), []);
  t.end();
});

tape('filterInRectFromQuadtree() filters values in the rectangle with accessors', (t) => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 15, y: 12 },
    { x: 30, y: 40 },
    { x: 20, y: 19 },
    { x: 5, y: 6 },
  ];
  const qt = quadtree()
    .x(d => d.x)
    .y(d => d.y)
    .addAll(data);

  const rect = [[10, 10], [20, 20]];

  t.deepEqual(filterInRectFromQuadtree(qt, rect, d => d.x, d => d.y), [{ x: 15, y: 12 }, { x: 20, y: 19 }]);
  t.end();
});
