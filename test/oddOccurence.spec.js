const expect = require("chai").expect;
const oddOccurence = require("../codeWarsSolutions/oddOccurence");

describe.only("Odd occurence in array", function() {
  it.only("should pair items in array and return unpaired item [9,3,9,3,9,7,9]", function() {
    expect(oddOccurence.oddOccurence([7, 9, 3, 9, 3, 9, 9])).equal(7);
  });
});

describe("Odd occurence2 in array", function() {
  it("should pair items in array and return unpaired item [9,3,9,3,9,7,9]", function() {
    expect(oddOccurence.oddOccurence2([9, 3, 9, 3, 9, 7, 9])).equal(7);
  });
  it("should pair items in array and return unpaired item [9,3,9,3,9,7,9]", function() {
    expect(oddOccurence.oddOccurence2([8, 3, 9, 3, 9, 7, 8])).equal(7);
  });
  it("should pair items in array and return unpaired item [9,3,9,3,9,7,9]", function() {
    expect(oddOccurence.oddOccurence2([1, 3, 1, 2, 2])).equal(3);
  });
});
