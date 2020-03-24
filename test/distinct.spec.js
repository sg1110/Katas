const expect = require("chai").expect;
const calculate = require("../codeWarsSolutions/distinct");

describe("Compute number of distinct values in an array.", function() {
  [
    { it: [2, 1, 1, 2, 3, 1], expect: 3 },
    { it: [1, 1], expect: 1 },
    { it: [1, 1, 1, 7, 8, 9], expect: 4 },
    { it: [1, 1, 1, 1, 1, 9], expect: 2 }
  ].forEach(run => {
    it(`for the input of ${run.it} number of distinct values is ${run.expect}`, () => {
      expect(calculate.calculateDistinctValues(run.it)).to.equal(run.expect);
    });
    it(`for the input of ${run.it} number of distinct values is ${run.expect}`, () => {
      expect(calculate.calculateDistinctValues2(run.it)).to.equal(run.expect);
    });
  });
});
