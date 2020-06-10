const expect = require("chai").expect;
const calculator = require("../codeWarsSolutions/calculator");

describe("Given a list of numbers", function() {
  it("should add up all the numbers together", function() {
    expect(calculator([1, 2, 3], "sum")).to.equal(6);
  });
  it("should add up all the numbers together", function() {
    expect(calculator([-1, 2, 3], "sum")).to.equal(4);
  });
  it("should find the average of numbers", function() {
    expect(calculator([1, 2, 3], "average")).to.equal(2);
  });
  it("should find the average of numbers", function() {
    expect(calculator([1, 2, 4], "average")).to.equal(2);
  });
  it("should find the average of numbers (round down)", function() {
    expect(calculator([1, 2, 3, 4], "average")).to.equal(2);
  });
  it("should find the most common number", function() {
    expect(calculator([1, 1, 3, 4], "common")).to.equal(1);
  });
  it("find the lowest missing number", function() {
    expect(calculator([1, 2, 4, 5], "lowestMissing")).to.equal(3);
  });
  it("find the lowest missing number in an unsorted array", function() {
    expect(calculator([2, 1, 5, 4], "lowestMissing")).to.equal(3);
  });
  it("find the lowest missing number in an unsorted array", function() {
    expect(calculator([1, 2, 4, 5, 7, 8], "lowestMissing")).to.equal(3);
  });
  it("confirm there are no missing numbers", function() {
    expect(calculator([1, 2, 3], "lowestMissing")).to.equal(0);
  });
  it("find the maximum prime number", function() {
    expect(calculator([30, 41, 49, 53, 64], "primeNumber")).to.equal(53);
  });
  it("find the maximum prime number", function() {
    expect(calculator([30, 41, 49, 53, 64, 289], "primeNumber")).to.equal(53);
  });
});
