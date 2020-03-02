// const expect = require("chai").expect;
// const score = require("../codeWarsSolutions/blackjack");

// describe("Given an input of arrays should calculate blackjack score", function() {
//   it("should add up number cards as their face value", function() {
//     expect(score(["2", "3"])).equal(5);
//   });

//   it("should add up number cards as their face vaue for three values", function() {
//     expect(score(["7", "7", "8"])).equal(22);
//   });

//   it("should score J,Q and K as 10", function() {
//     expect(score(["K", "J", "Q"])).equal(30);
//   });

//   it("should score J, and 5 values correctly", function() {
//     expect(score(["J", "5"])).equal(15);
//   });

//   it("should score A as 11 when the total score would not go above 21", function() {
//     expect(score(["10", "A"])).equal(21);
//   });

//   it("should score A as 1 when the total score would go above 21", function() {
//     expect(score(["10", "9", "A"])).equal(20);
//   });

//   it("should score two A's as 1 when the total score would go above 21", function() {
//     expect(score(["10", "9", "A", "A"])).equal(21);
//   });

//   it("should score two A as 1 and 11", function() {
//     expect(score(["A", "A"])).equal(12);
//   });
// });
