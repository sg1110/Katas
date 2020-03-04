const expect = require("chai").expect;
const missingInteger = require("../codeWarsSolutions/missingInteger");

describe.only("given an array of integers return the smallest positive integer (greater than 0) that does not occur in array", function() {
  it("should work for array full of positive integers with duplicate values with missing cons nr", function() {
    expect(missingInteger([1, 3, 6, 4, 1, 2])).to.deep.equal(5);
  });
  it("should work for array of positive consecutive integers", function() {
    expect(missingInteger([1, 2, 3])).to.deep.equal(4);
  });
  it("should work for negative integers", function() {
    let array = [-1, -3];
    expect(missingInteger(array)).to.deep.equal(1);
  });
  it("should work for one positive integers", function() {
    expect(missingInteger([999])).to.deep.equal(1000);
  });
});
