const expect = require("chai").expect;
const blocks = require("../codeWarsSolutions/blocks");

describe("One block elements", function() {
  it("should order elements in alphabetic order", function() {
    expect(blocks.sortBlocks("zabe")).equal("abez");
  });

  it("should order lower case letters first", function() {
    expect(blocks.sortBlocks("ABzx")).equal("xzAB");
  });

  // it(`should order elements in numerical order `, function() {
  //   expect(blocks.sortBlocks("9871").expect.equal("1798"));
  // });

  // it(`should put alphabetical elements before numerical elements`, function() {
  //   expect(blocks.sortBlocks("21AxBz").expect.equal("xzAB12"));
  // });
});

// lowercase letters (a - z), in alphabetic order
// uppercase letters (A - Z), in alphabetic order
// digits (0 - 9), in ascending order
// assert.equal(blocks("21AxBz"), "xzAB12");
// assert.equal(blocks("abacad"), "abcd-a-a");
// assert.equal(blocks(""), "");
