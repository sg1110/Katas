const expect = require("chai").expect;
const recursionPractise = require("../codeWarsSolutions/recursionPractise");

describe("Recursion practise", function() {
  it("factorial for 9", function() {
    expect(recursionPractise.factorial(9)).to.equal(362880);
  });
  it("factorial for 5", function() {
    expect(recursionPractise.factorial(5)).to.equal(120);
  });
});

describe("Fibonacci practise", function() {
  //  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
  it("Fibonacci number for the 1st position", function() {
    expect(recursionPractise.fibonacci(1)).to.equal(0);
  });
  it("Fibonacci number for the 2nd position", function() {
    expect(recursionPractise.fibonacci(2)).to.equal(1);
  });
  it("Fibonacci number for the 3rd position", function() {
    expect(recursionPractise.fibonacci(3)).to.equal(1);
  });
  it("Fibonacci number for the 4th position", function() {
    expect(recursionPractise.fibonacci(4)).to.equal(2);
  });
  it("Fibonacci number for the 5th position", function() {
    expect(recursionPractise.fibonacci(5)).to.equal(3);
  });
  it("Fibonacci number for the 6th position", function() {
    expect(recursionPractise.fibonacci(6)).to.equal(5);
  });
  it("Fibonacci number for the 7th position", function() {
    expect(recursionPractise.fibonacci(7)).to.equal(8);
  });
  it("Fibonacci number for the 8th position", function() {
    expect(recursionPractise.fibonacci(8)).to.equal(13);
  });
  it("Fibonacci number for the 9th position", function() {
    expect(recursionPractise.fibonacci(9)).to.equal(21);
  });
});
