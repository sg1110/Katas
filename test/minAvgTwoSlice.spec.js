const expect = require("chai").expect;
const mindAvgTwoSlice = require("../codeWarsSolutions/minAvgTwoSlice");

describe.only("Return starting position of the slice with the smallest average", function() {
  [{ it: [2, 1, 4], expect: 0 }, { it: [4, 2, 2, 5], expect: 1 }].forEach(run =>
    it(`Given input of ${run.it} the lowest smallest average starts at ${run.expect}`, function() {
      expect(mindAvgTwoSlice(run.it)).to.equal(run.expect);
    })
  );
});

// 4 2 = 3
// 2 2 = 2
// 2 5 = 3.5
// 4 2 2 = 2.66
// 2 2 5  = 3
// 4 2 2 5 = 3.25
