const tape = require('tape');
const extentMulti = require('../extentMulti').default;

tape('extentMulti() produces the correct value with defaults', (t) => {
  const outerArray = [
    [1, 2, 3],
    [0, 2, 1],
    [2, 5, 9],
  ];
  const result = extentMulti(outerArray);
  t.deepEqual(result, [0, 9]);
  t.end();
});

tape('extentMulti() produces the correct value with accessors', (t) => {
  const outerArray = [
    { data: [{ v: 1 }, { v: 2 }, { v: 3 }] },
    { data: [{ v: 0 }, { v: 2 }, { v: 1 }] },
    { data: [{ v: 2 }, { v: 5 }, { v: 9 }] },
  ];
  const result = extentMulti(outerArray, d => d.v, inner => inner.data);
  t.deepEqual(result, [0, 9]);
  t.end();
});

tape('extentMulti() handles empty array', (t) => {
  const data = [];
  const result = extentMulti(data);
  t.equal(result, undefined);
  t.end();
});

tape('extentMulti() handles a falsy array', (t) => {
  const result = extentMulti(null);
  t.equal(result, undefined);
  t.end();
});

tape('extentMulti() produces the correct value with quantile limit', (t) => {
  const outerArray = [
    [1, 2, 3],
    [0, 2, 1],
    [2, 5, 9],
  ];
  const result = extentMulti(outerArray, undefined, undefined, null, 0.6);
  t.deepEqual(result, [0, 2]);
  t.end();
});
