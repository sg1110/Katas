const calculator = require("../codeWarsSolutions/stringCalculator");
const expect = require("chai").expect;

describe.only("Given general number convert to roman numerals", function() {
  [
    { it: "1.1,2.2", expect: "3.3" },
    { it: "", expect: "0" },
    { it: "1.0,2.0", expect: "3.0" }
  ].forEach(run =>
    it(`should convert ${run.it} to a  roman numeral ${run.expect}`, () => {
      expect(calculator(run.it)).to.equal(run.expect);
    })
  );
});
