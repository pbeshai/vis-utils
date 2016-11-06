/* eslint-disable */
const tape = require('tape');
const findClosestSorted = require('../findClosestSorted').default;


tape('findClosestSorted() finds correct value', function (t) {
  t.equal(findClosestSorted([1, 2, 3, 4, 5], 3.49), 3);
  t.equal(findClosestSorted([1, 2, 3, 4, 5], 3.51), 4);
  t.equal(findClosestSorted([1, 2, 3, 4, 5], 0), 1);
  t.equal(findClosestSorted([1, 2, 3, 4, 5], 6), 5);
  t.end();
});
