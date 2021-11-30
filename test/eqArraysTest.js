const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("ur bless", () => {
    assert.deepEqual(eqArrays([1, 2, 3],  [1, 2, 3]), true);
  }),

  it("ur not bless", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

});

