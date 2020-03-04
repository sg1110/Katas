const cyclicRotation = require("../codeWarsSolutions/cyclicRotation");
const expect = require("chai").expect;

describe("Cyclic rotation", function() {
  it("Rotate array by one place", function() {
    expect(cyclicRotation([3, 8, 9, 7, 6], 1)).to.deep.equal([6, 3, 8, 9, 7]);
  });
  it("Rotate array by three place", function() {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).to.deep.equal([9, 7, 6, 3, 8]);
  });
  it("Rotate should rotate an array of identical values by 1", function() {
    expect(cyclicRotation([0, 0, 0], 1)).to.deep.equal([0, 0, 0]);
  });
  it("Rotate should rotate an array by 4 and return the original array", function() {
    expect(cyclicRotation([1, 2, 3, 4], 4)).to.deep.equal([1, 2, 3, 4]);
  });
  it("Rotate should rotate an array by 5 (value longer than array by 1)", function() {
    expect(cyclicRotation([1, 2, 3, 4], 5)).to.deep.equal([4, 1, 2, 3]);
  });
  it("Rotate should rotate an array by 11 (value longer than array by 6)", function() {
    expect(cyclicRotation([1, 2, 3, 4, 5], 11)).to.deep.equal([5, 1, 2, 3, 4]);
  });
  it("Rotate should rotate an array by 17 (value longer than array by 12)", function() {
    expect(cyclicRotation([1, 2, 3, 4, 5], 17)).to.deep.equal([4, 5, 1, 2, 3]);
  });
});
