const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("ur bless", () => {
    assertEqual(1, 1);
  }),

  it("ur bless", () => {
    assertEqual("Lighthouse Labs", "Lighthouse Labs");
  }),

  it("ur not bless", () => {
    assertEqual('lighthouse', 'bootcamp');
  });

});

