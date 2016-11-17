const tape = require('tape');
const findEqualUnsorted = require('../findEqualUnsorted').default;

tape('findEqualUnsorted() finds the value and returns it', (t) => {
  const values = [{ a: 4 }, { a: 2 }, { a: 1 }, { a: 10 }, { a: 3 }];
  t.equal(findEqualUnsorted(values, values[0]), values[0]);
  t.equal(findEqualUnsorted(values, values[4]), values[4]);
  t.equal(findEqualUnsorted(values, values[3]), values[3]);
  t.equal(findEqualUnsorted(values, values[2]), values[2]);
  t.end();
});

tape('findEqualUnsorted() returns undefined for not found', (t) => {
  const values = [{ a: 4 }, { a: 2 }, { a: 1 }, { a: 10 }, { a: 3 }];
  const accessor = d => d.a;
  t.equal(findEqualUnsorted(values, 0, accessor), undefined);
  t.equal(findEqualUnsorted(values, 99, accessor), undefined);
  t.end();
});
