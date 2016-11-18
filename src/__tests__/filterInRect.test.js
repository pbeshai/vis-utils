const tape = require('tape');
const filterInRect = require('../filterInRect').default;

tape('filterInRect() filters values in the rectangle', (t) => {
  const data = [[1, 2], [2, 3], [15, 12], [30, 40], [20, 19], [5, 6]];
  const rect = [[10, 10], [20, 20]];

  t.deepEqual(filterInRect(data, rect), [[15, 12], [20, 19]]);
  t.end();
});

tape('filterInRect() handles matching no data', (t) => {
  const data = [[1, 2], [2, 3], [5, 6]];
  const rect = [[10, 10], [20, 20]];

  t.deepEqual(filterInRect(data, rect), []);
  t.end();
});

tape('filterInRect() filters values in the rectangle with accessors', (t) => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 15, y: 12 },
    { x: 30, y: 40 },
    { x: 20, y: 19 },
    { x: 5, y: 6 }
  ];

  const rect = [[10, 10], [20, 20]];

  t.deepEqual(filterInRect(data, rect, d => d.x, d => d.y), [{ x: 15, y: 12 }, { x: 20, y: 19 }]);
  t.end();
});
