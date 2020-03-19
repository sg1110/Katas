const expect = require("chai").expect;
const calculate = require("../codeWarsSolutions/arraySum");

describe("Array Sum", function() {
  [
    { it: [1, 2, [3, 4, [5]]], expect: 15 },
    { it: [2, [2], [3, [3, [1], 1], [4, 4]]], expect: 20 }
  ].forEach(run => {
    it(`should calculate the sum of multidimensiona array ${run.it} and return ${run.expect}`, () => {
      expect(calculate(run.it)).to.equal(run.expect);
    });
  });
});

//Calculate the sum of an array which contains integers and other arrays with integers. For example:
// array_sum([1,2,[3,4,[5]]])
// would return 15.
