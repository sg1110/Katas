const converter = require("../javascript/romanNumeralConverter");
const expect = require("chai").expect;

describe("Given general number convert to roman numerals", function() {
  [
    { it: 1, expect: "I" },
    { it: 2, expect: "II" },
    { it: 3, expect: "III" },
    { it: 4, expect: "IV" },
    { it: 5, expect: "V" },
    { it: 6, expect: "VI" },
    { it: 7, expect: "VII" },
    { it: 8, expect: "VIII" },
    { it: 9, expect: "IX" },
    { it: 10, expect: "X" },
    { it: 15, expect: "XV" },
    { it: 20, expect: "XX" },
    { it: 30, expect: "XXX" },
    { it: 45, expect: "XXXXV" },
    { it: 49, expect: "XXXXIX" },
    { it: 50, expect: "L" },
    { it: 51, expect: "LI" },
    { it: 60, expect: "LX" },
    { it: 79, expect: "LXXIX" }
  ].forEach(run =>
    it(`should convert ${run.it} to a  roman numeral ${run.expect}`, () => {
      expect(converter(run.it)).to.equal(run.expect);
    })
  );
});
