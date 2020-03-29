const calculator = require("../codeWarsSolutions/stringCalculator");
const expect = require("chai").expect;

describe.only("String Calculator", () => {
  describe("should add unknown number of integers", () => {
    [
      { it: "1.1,2.2", expect: "3.3" },
      { it: "", expect: "0" },
      { it: "1.0,2.0", expect: "3.0" }
    ].forEach(run =>
      it(`should sum up ${run.it} and return the sum of ${run.expect}`, () => {
        expect(calculator(run.it)).to.equal(run.expect);
      })
    );
  });
  describe("should interpret newline character as seperator", () => {
    [
      { it: "1\n2,3", expect: "6.0" },
      {
        it: "175.2,\n35",
        expect: "Number expected but '\\n' found at position 6."
      }
    ].forEach(run =>
      it(`should sum up ${run.it} and return the sum of ${run.expect}`, () => {
        expect(calculator(run.it)).to.equal(run.expect);
      })
    );
  });
  describe("should not allow input to end in a seperator", () => {
    [
      { it: "1,3,", expect: "Number expected but EOF found" },
      { it: "1,4,/n3,", expect: "Number expected but EOF found" }
    ].forEach(run =>
      it(`should sum up ${run.it} and return the sum of ${run.expect}`, () => {
        expect(calculator(run.it)).to.equal(run.expect);
      })
    );
  });
  describe("should be able to handle specified delimeter", () => {
    [
      { it: "1//;\\n1;2", expect: "3.0" }
      // { it: "//|\n1|2|3,", expect: "6.0" },
      // { it: "//sep\n2sep3", expect: "5.0" },
      // { it: "//|\n1|2,3", expect: "'|' expected but ',' found at position 3." }
    ].forEach(run =>
      it(`should sum up ${run.it} and return the sum of ${run.expect}`, () => {
        expect(calculator(run.it)).to.equal(run.expect);
      })
    );
  });
});

// //[delimiter]\n[numbers]
// "//;\n1;2" should return "3"
// "//|\n1|2|3" should return "6"
// "//sep\n2sep3" should return "5"
// "//|\n1|2,3" is invalid and should return the message "'|' expected but ',' found at position 3."
// All existing scenarios should work as before.
