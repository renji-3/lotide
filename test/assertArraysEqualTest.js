const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("ur bless", () => {
    assertArraysEqual([1, 2, 3], [3, 2, 1]);
  }),

  it("ur bless", () => {
    assertArraysEqual([1, 2, 3], [1, 2, 3]);
  }),

  it("ur bless", () => {
    assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
  }),

  it("ur not bless", () => {
    assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
  });


});
