const regex = require("../codeWarsSolutions/removeDuplicates");
const expect = require("chai").expect;

describe("Hand scenarios", function() {
  it("Remove duplicate words and return them in a sorted fashion", function() {
    expect(
      regex.regexSortedDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      )
    ).to.equal("alpha beta delta gamma");
  });
  it("Remove duplicate words and keep original structure", function() {
    expect(
      regex.regexOriginalStructure(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      )
    ).to.equal("alpha beta gamma delta");
  });
  it("Remove duplicate words and keep original structure", function() {
    expect(
      regex.getPostcode("2 Castlebar Park, London, Greater London W5 1BX, UK")
    ).to.equal("W5 1BX");
  });
  it("Count letters and digits in string 1", function() {
    expect(regex.countLettersAndDigits("hel2!lo")).to.equal(6);
  });
  it("Count letters and digits in string 2", function() {
    expect(regex.countLettersAndDigits("n!!_ice!!123")).to.equal(7);
  });
  it("Count letters and digits in string 3", function() {
    expect(regex.countLettersAndDigits("nice")).to.equal(4);
  });
  it("Confirm it is a vowel", function() {
    expect(regex.vowel("a")).to.be.true;
  });
  it("Confirm it is not a vowel", function() {
    expect(regex.vowel("Z")).to.be.false;
  });
  it("Confirm it is not a vowel for 'lol' ", function() {
    expect(regex.vowel("lol")).to.be.false;
  });
  it("Confirm it is not a vowel empty ", function() {
    expect(regex.vowel("")).to.be.false;
  });
});
