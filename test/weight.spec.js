const weight = require("../codeWarsSolutions/weight");
const expect = require("chai").expect;

describe("First test", function() {
  it(`should order the weight from lowest to highest`, function() {
    expect(weight("3 1")).to.equal("1 3");
  });

  it(`should order the weight from lowest to highest`, function() {
    expect(weight("4 2")).to.equal("2 4");
  });

  it(`should order based on digits sum`, function() {
    expect(weight("3 11")).to.equal("11 3");
  });

  it(`should order based on digits sum`, function() {
    expect(weight("43 51")).to.equal("51 43");
  });

  it(`should order based on digits sum`, function() {
    expect(weight("103 123 4444 99 2000")).to.equal("2000 103 123 4444 99");
  });

  it(`should order based on digits sum`, function() {
    expect(weight("2000 10003 1234000 44444444 9999 11 11 22 123")).to.equal(
      "11 11 2000 10003 22 123 1234000 44444444 9999"
    );
  });
});

// When two numbers have the same "weight", let us class them as if they were strings
// (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1)
// is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.
