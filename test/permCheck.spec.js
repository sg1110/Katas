const permCheck = require("../codeWarsSolutions/permCheck");
const expect = require("chai").expect;

describe.only("Given an array of integers confirm if the array is a permutation", function() {
  it("should confirm the array is perm when all numbers appear from 1 to 4", function() {
    expect(permCheck.permCheck([4, 1, 3, 2])).to.equal(1);
  });
  it("should confirm the array is NOT perm when 2 is missing from array 1-4", function() {
    expect(permCheck.permCheck([4, 1, 3])).to.equal(0);
  });
  it("should confirm the array is NOT perm when 2 is appearing multiple times in array 1-4", function() {
    expect(permCheck.permCheck([4, 1, 2, 2, 3])).to.equal(0);
  });
});

describe("Helper functions", function() {
  it("should confirm all numbers appear in sequence", function() {
    expect(permCheck.isInSequence([1, 2, 3, 4], 4)).to.be.true;
  });
  it("should confirm all numbers do not appear in sequence", function() {
    expect(permCheck.isInSequence([1, 3, 4], 3)).to.be.false;
  });
  it("should confirm there are duplicates in input", function() {
    expect(permCheck.containsDuplicates([1, 1, 3, 4], 4)).to.be.true;
  });
  it("should confirm there are duplicates in input", function() {
    expect(permCheck.containsDuplicates([1, 2, 2, 3], 4)).to.be.true;
  });
  it("should confirm there are NO duplicates in input", function() {
    expect(permCheck.containsDuplicates([1, 3, 4], 3)).to.be.false;
  });
});
