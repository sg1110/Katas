const expect = require("chai").expect;
const arrayPairSum = require("../codeWarsSolutions/arrayPairSum");

describe("Given an integer array, output all pairs that sum up to a specific value 𝑘.", function() {
  [
    {
      it: {
        givenSum: 10,
        inputArray: [3, 4, 5, 6, 7]
      },
      expect: ["3 7", "4 6"]
    },
    {
      it: {
        givenSum: 8,
        inputArray: [3, 4, 5, 4, 4]
      },
      expect: ["3 5"]
    },
    {
      it: {
        givenSum: 9,
        inputArray: [3, 4, 5, 4, 4]
      },
      expect: ["4 5"]
    }
  ].forEach(run => {
    it(`should calculate the sum of multidimensiona array ${"givenSum=" +
      run.it.givenSum +
      " " +
      "inputArray=" +
      run.it.inputArray} and return ${run.expect}`, () => {
      expect(arrayPairSum(run.it.givenSum, run.it.inputArray)).to.deep.equal(
        run.expect
      );
    });
  });
});

// Given an integer array, output all pairs that sum up to a specific value 𝑘.
// Consider the fact that the same number can add up to 𝑘 with its duplicates in the array.
// For example the array is [1, 1, 2, 3, 4] and the desired sum is 4. Should we output the pair (1, 3)
// twice or just once? Also do we output the reverse of a pair, meaning both (3, 1) and (1, 3)?

//  Let’s keep the output as short as possible and print each pair only once. So, we will output only one copy of (1, 3).
//  Also note that we shouldn’t output (2, 2) because it’s not a pair of two distinct elements.
// Your program receives a comma separated list of integers where the first value is the desired sum 𝑘 and
// all others are the integers to search for pairs in. Your output should be a list of comma separated pairs where the lower
// of the two numbers is always on the left side:
