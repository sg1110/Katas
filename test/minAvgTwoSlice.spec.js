const expect = require("chai").expect;
const mindAvgTwoSlice = require("../codeWarsSolutions/minAvgTwoSlice");

describe("Return starting position of the slice with the minimal avergae", function() {
  it("", function() {
    expect(mindAvgTwoSlice([2, 1, 4])).equal(2);
  });
});

// 2 1 =  avg 1.5
// 1 4 = avg 2.5
//2 1 4 = avg 2.33

// returns the starting position of the slice with the minimal average.
// If there is more than one slice with a minimal average,
//  you should return the smallest starting position of such a slice
