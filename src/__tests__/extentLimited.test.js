const tape = require('tape');
const extentLimited = require('../extentLimited').default;

tape('extentLimited() produces the correct value with defaults', (t) => {
  const result = extentLimited([1, 0, 2, 9, 4]);
  t.deepEqual(result, [0, 9]);
  t.end();
});

tape('extentLimited() produces the correct value with accessors', (t) => {
  const result = extentLimited([{ v: 1 }, { v: 0 }, { v: 2 }, { v: 9 }], d => d.v);
  t.deepEqual(result, [0, 9]);
  t.end();
});

tape('extentLimited() handles empty array', (t) => {
  const data = [];
  const result = extentLimited(data);
  t.equal(result, undefined);
  t.end();
});

tape('extentLimited() handles a falsy array', (t) => {
  const result = extentLimited(null);
  t.equal(result, undefined);
  t.end();
});

tape('extentLimited() produces the correct value with max quantile limit', (t) => {
  const array = [1, 2, 3, 0, 2, 1, 2, 5, 9];
  const result = extentLimited(array, undefined, undefined, 0.76);
  t.deepEqual(result, [0, 3]);
  t.end();
});

tape('extentLimited() produces the correct value with min quantile limit', (t) => {
  const array = [1, 2, 3, 0, 2, 1, 2, 5, 9];
  const result = extentLimited(array, undefined, 0.3);
  t.deepEqual(result, [2, 9]);
  t.end();
});
