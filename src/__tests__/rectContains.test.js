const tape = require('tape');
const rectContains = require('../rectContains').default;

tape('rectContains() correctly detects points within the rect', (t) => {
  t.ok(rectContains([[0, 0], [1, 1]], [0.5, 0.5]));
  t.ok(rectContains([[0, 0], [1, 1]], [0, 0])); //
  t.ok(rectContains([[0, 0], [1, 1]], [0, 1]));
  t.ok(rectContains([[0, 0], [1, 1]], [0, 0.5]));
  t.ok(rectContains([[0, 0], [1, 1]], [1, 1]));
  t.end();
});

tape('rectContains() correctly detects points not within the rect', (t) => {
  t.notOk(rectContains([[0, 0], [1, 1]], [0.5, -0.5])); // N
  t.notOk(rectContains([[0, 0], [1, 1]], [1.5, -0.5])); // NE
  t.notOk(rectContains([[0, 0], [1, 1]], [1.5, 0.5])); // E
  t.notOk(rectContains([[0, 0], [1, 1]], [1.5, 1.5])); // SE
  t.notOk(rectContains([[0, 0], [1, 1]], [0.5, 1.5])); // S
  t.notOk(rectContains([[0, 0], [1, 1]], [-0.5, 1.5])); // SW
  t.notOk(rectContains([[0, 0], [1, 1]], [-0.5, 0.5])); // W
  t.notOk(rectContains([[0, 0], [1, 1]], [-0.5, -0.5])); // NW
  t.end();
});
