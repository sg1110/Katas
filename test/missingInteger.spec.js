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
});

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
