const expect = require("chai").expect;
const recursionPractise = require("../codeWarsSolutions/recursionPractise");

describe.only("Recursion practise", function() {
  it("factorial for 9", function() {
    expect(recursionPractise.factorial(9)).to.equal(362880);
  });
  it("factorial for 5", function() {
    expect(recursionPractise.factorial(5)).to.equal(120);
  });
});
