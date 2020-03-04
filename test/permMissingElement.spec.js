const element = require("../codeWarsSolutions/permMissingElement");
const expect = require("chai").expect;

describe("Find missing element", function() {
  it("Should find the missing element 4 in array of up to 5", function() {
    expect(element([2, 3, 1, 5])).to.equal(4);
  });
  it("Should find the missing element 11 in array of up to 12", function() {
    expect(element([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12])).to.equal(11);
  });
  it("Should find the missing element 1 in array of up to 5", function() {
    expect(element([2, 3, 4, 5])).to.equal(1);
  });
});
