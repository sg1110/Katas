const expect = require("chai").expect;
const fibo = require("../codeWarsSolutions/fibonacciNumbers");

describe("fibonacci numbers", function() {
  it("1st value of 0", function() {
    expect(fibo.fiboNacciNumbers(1)).to.equal(0);
  });
  it("2nd value of 1", function() {
    expect(fibo.fiboNacciNumbers(2)).to.equal(1);
  });
  it("3rd value of 1", function() {
    expect(fibo.fiboNacciNumbers(3)).to.equal(1);
  });
  it("4th value of 2", function() {
    expect(fibo.fiboNacciNumbers(4)).to.equal(2);
  });
  it("5th value of 3", function() {
    expect(fibo.fiboNacciNumbers(5)).to.equal(3);
  });
  it("6th value of 5", function() {
    expect(fibo.fiboNacciNumbers(6)).to.equal(5);
  });
  it("7th value of 8", function() {
    expect(fibo.fiboNacciNumbers(7)).to.equal(8);
  });
  it("8th value of 13", function() {
    expect(fibo.fiboNacciNumbers(8)).to.equal(13);
  });
  it("9th value of 21", function() {
    expect(fibo.fiboNacciNumbers(9)).to.equal(21);
  });
  it("10th value of 34", function() {
    expect(fibo.fiboNacciNumbers(10)).to.equal(34);
  });
});
describe("fibonacci numbers", function() {
  it("1st value of 0", function() {
    expect(fibo.fiboNacciNumbers2(1)).to.equal(0);
  });
  it("2nd value of 1", function() {
    expect(fibo.fiboNacciNumbers2(2)).to.equal(1);
  });
  it("3rd value of 1", function() {
    expect(fibo.fiboNacciNumbers2(3)).to.equal(1);
  });
  it("4th value of 2", function() {
    expect(fibo.fiboNacciNumbers2(4)).to.equal(2);
  });
  it("5th value of 3", function() {
    expect(fibo.fiboNacciNumbers2(5)).to.equal(3);
  });
  it("6th value of 5", function() {
    expect(fibo.fiboNacciNumbers2(6)).to.equal(5);
  });
  it("7th value of 8", function() {
    expect(fibo.fiboNacciNumbers2(7)).to.equal(8);
  });
  it("8th value of 13", function() {
    expect(fibo.fiboNacciNumbers2(8)).to.equal(13);
  });
  it("9th value of 21", function() {
    expect(fibo.fiboNacciNumbers2(9)).to.equal(21);
  });
  it("10th value of 34", function() {
    expect(fibo.fiboNacciNumbers2(10)).to.equal(34);
  });
});
describe("fibonacci numbers", function() {
  it("1st value of 0", function() {
    expect(fibo.fibo3(1)).to.equal(0);
  });
  it("2nd value of 1", function() {
    expect(fibo.fibo3(2)).to.equal(1);
  });
  it("3rd value of 1", function() {
    expect(fibo.fibo3(3)).to.equal(1);
  });
  it("4th value of 2", function() {
    expect(fibo.fibo3(4)).to.equal(2);
  });
  it("5th value of 3", function() {
    expect(fibo.fibo3(5)).to.equal(3);
  });
  it("6th value of 5", function() {
    expect(fibo.fibo3(6)).to.equal(5);
  });
});

// Write some code to generate the Fibonacci number for the nth position.
//  Example: int Fibonacci(int position). The first Fibonacci numbers in the sequence are:
//  0, 1, 1, 2,
// 3, 5, 8, 13, 21, 34.
