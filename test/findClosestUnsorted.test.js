const tape = require('tape');
const findClosestUnsorted = require('../build/vis-utils').findClosestUnsorted;

tape('findClosestUnsorted() finds correct value', (t) => {
  const values = [8, 9, 1, 2, 6, 3, 5, 4, 5, 10];
  t.equal(findClosestUnsorted(values, 3.49), 3);
  t.equal(findClosestUnsorted(values, 3.51), 4);
  t.equal(findClosestUnsorted(values, 0), 1);
  t.equal(findClosestUnsorted(values, 1), 1);
  t.equal(findClosestUnsorted(values, 10), 10);
  t.equal(findClosestUnsorted(values, 11), 10);
  t.end();
});

tape('findClosestUnsorted() works with accessor', (t) => {
  const values = [{ a: 4 }, { a: 2 }, { a: 1 }, { a: 10 }, { a: 3 }];
  const accessor = d => d.a;
  t.deepEqual(findClosestUnsorted(values, 3.49, accessor), { a: 3 });
  t.deepEqual(findClosestUnsorted(values, 3.51, accessor), { a: 4 });
  t.deepEqual(findClosestUnsorted(values, 0, accessor), { a: 1 });
  t.deepEqual(findClosestUnsorted(values, 1, accessor), { a: 1 });
  t.deepEqual(findClosestUnsorted(values, 10, accessor), { a: 10 });
  t.deepEqual(findClosestUnsorted(values, 11, accessor), { a: 10 });
  t.end();
});
