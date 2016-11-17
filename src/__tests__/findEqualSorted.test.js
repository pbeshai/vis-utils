const tape = require('tape');
const findEqualSorted = require('../findEqualSorted').default;

tape('findEqualSorted() finds the value and returns it', (t) => {
  const values = [1, 2, 3, 4, 10];
  t.equal(findEqualSorted(values, 1), values[0]);
  t.equal(findEqualSorted(values, 10), values[4]);
  t.equal(findEqualSorted(values, 4), values[3]);
  t.equal(findEqualSorted(values, 3), values[2]);
  t.end();
});

tape('findEqualSorted() finds the value and returns it with accessor', (t) => {
  const values = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 10 }];
  const accessor = d => d.a;
  t.equal(findEqualSorted(values, 1, accessor), values[0]);
  t.equal(findEqualSorted(values, 10, accessor), values[4]);
  t.equal(findEqualSorted(values, 4, accessor), values[3]);
  t.equal(findEqualSorted(values, 3, accessor), values[2]);
  t.end();
});

tape('findEqualSorted() returns undefined for not found', (t) => {
  const values = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 10 }];
  const accessor = d => d.a;
  t.equal(findEqualSorted(values, 0, accessor), undefined);
  t.equal(findEqualSorted(values, 99, accessor), undefined);
  t.end();
});
