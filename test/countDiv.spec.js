const expect = require("chai").expect;
const count = require("../codeWarsSolutions/countDiv");

describe("Given three integers", function() {
  it("within 6-11 range return nr of integers that are divisible by 2", function() {
    expect(count.countDiv(6, 11, 2)).to.equal(3);
  });
});

describe.only("Given three integers", function() {
  it("within 6-11 range return nr of integers that are divisible by 2", function() {
    expect(count.countDiv2(6, 11, 2)).to.equal(3);
  });
  it("within 3-9 (inclusive) range return nr of integers that are divisible by 3", function() {
    expect(count.countDiv2(3, 9, 3)).to.equal(3);
  });
});
// function solution(A, B, K);
// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
// { i : A ≤ i ≤ B, i mod K = 0 }
// For example, for A = 6, B = 11 and K = 2, your function should return 3,
//  because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
// Write an efficient algorithm for the following assumptions:
// A and B are integers within the range [0..2,000,000,000];
// K is an integer within the range [1..2,000,000,000];
// A ≤ B.
