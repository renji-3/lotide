const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns true", () => {
    assert.deepEqual(tail(words), [ 'Lighthouse', 'Labs' ]);
  }),

  it("returns true", () => {
    assert.deepEqual(tail([1, 2, 3]), [ 2, 3 ]);
  });

});

