const binaryGap = require("../codeWarsSolutions/binaryGap");
const expect = require("chai").expect;

describe("Binary gap - maximal sequence of consecutive zeros that is surounded by ones at both ends of binary representation of N", function() {
  it("Should return binary gap of 2 for 9 (1001)", function() {
    expect(binaryGap.binaryGap(9)).to.equal(2);
  });
  it("Should return binary gap of 4 for 20 (10100)", function() {
    expect(binaryGap.binaryGap(20)).to.equal(1);
  });
  it("Should return the largest binary gap of 4 for 529 (1000010001)", function() {
    expect(binaryGap.binaryGap(529)).to.equal(4);
  });
  it("Should return 0 as there are no binary gaps for 15 (1111)", function() {
    expect(binaryGap.binaryGap(15)).to.equal(0);
  });
  it("Should return 0 as there are no binary gaps for 32 (100000)", function() {
    expect(binaryGap.binaryGap(32)).to.equal(0);
  });
});

// describe("Helper functions", function() {
//   it("get binary number for 9", function() {
//     expect(binaryGap.getBinary(9)).to.equal("1001");
//   });
//   it("get binary number for 20", function() {
//     expect(binaryGap.getBinary(20)).to.equal("10100");
//   });
//   it("get binary number for 529", function() {
//     expect(binaryGap.getBinary(529)).to.equal("1000010001");
//   });
//   it("get binary number for 15", function() {
//     expect(binaryGap.getBinary(15)).to.equal("1111");
//   });
//   it("get binary number for 32", function() {
//     expect(binaryGap.getBinary(32)).to.equal("100000");
//   });
// });

// // Write a function:
// // function solution(N);
// // that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// // For example, given N = 1041 the function should return 5, because N has binary representation 10000010001
// //and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000'
// //and thus no binary gaps.
// // Write an efficient algorithm for the following assumptions:

// // N is an integer within the range [1..2,147,483,647].
