const tape = require("../codeWarsSolutions/tapeEquilibrium");
const expect = require("chai").expect;

describe.only("Given an array of integers ", function() {
  it("Return the lowest difference", function() {
    expect(tape([3, 1, 2, 4, 3])).to.equal(1);
  });
});

// Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1]
//and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
//Answer = 1

// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
