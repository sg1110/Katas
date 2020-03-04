const frog = require("../codeWarsSolutions/frogJMP");
const expect = require("chai").expect;

describe("Frog JMP kata", function() {
  it("Frog starts at 10, jumps at 30, needs to reach 85", function() {
    expect(frog(10, 85, 30)).to.equal(3);
  });
  it("Frog starts at 10, jumps at 30, needs to reach 20", function() {
    expect(frog(10, 20, 30)).to.equal(1);
  });
  it("Frog starts at 0, jumps at 10, needs to reach 100", function() {
    expect(frog(0, 100, 10)).to.equal(10);
  });
});
