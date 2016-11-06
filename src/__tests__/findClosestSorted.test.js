const tape = require('tape');
const findClosestSorted = require('../findClosestSorted').default;

tape('findClosestSorted() finds correct value', (t) => {
  t.equal(findClosestSorted([1, 2, 3, 4, 10], 3.49), 3);
  t.equal(findClosestSorted([1, 2, 3, 4, 10], 3.51), 4);
  t.equal(findClosestSorted([1, 2, 3, 4, 10], 0), 1);
  t.equal(findClosestSorted([1, 2, 3, 4, 10], 1), 1);
  t.equal(findClosestSorted([1, 2, 3, 4, 10], 10), 10);
  t.equal(findClosestSorted([1, 2, 3, 4, 10], 11), 10);
  t.end();
});

tape('findClosestSorted() works with accessor', (t) => {
  const values = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 10 }];
  const accessor = d => d.a;
  t.deepEqual(findClosestSorted(values, 3.49, accessor), { a: 3 });
  t.deepEqual(findClosestSorted(values, 3.51, accessor), { a: 4 });
  t.deepEqual(findClosestSorted(values, 0, accessor), { a: 1 });
  t.deepEqual(findClosestSorted(values, 1, accessor), { a: 1 });
  t.deepEqual(findClosestSorted(values, 10, accessor), { a: 10 });
  t.deepEqual(findClosestSorted(values, 11, accessor), { a: 10 });
  t.end();
});
