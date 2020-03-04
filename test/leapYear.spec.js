const leap = require("../codeWarsSolutions/leapYear");
const expect = require("chai").expect;

describe("As a user, I want to know if a year is a leap year, ", function() {
  it("All years divisible by 400 are leap years", function() {
    expect(leap(2000)).to.be.true;
  });
  it("All years divisible by 100 but not by 400 are not leap years, (1700)", function() {
    expect(leap(1700)).to.be.false;
  });
  it("All years divisible by 100 but not by 400 are not leap years (1800)", function() {
    expect(leap(1800)).to.be.false;
  });
  it("All years divisible by 100 but not by 400 are not leap years (2100)", function() {
    expect(leap(2100)).to.be.false;
  });
  it("All years divisible by 4 but not by 100 are not leap years (2008)", function() {
    expect(leap(2008)).to.be.false;
  });
  it("All years divisible by 4 but not by 100 are not leap years (2012)", function() {
    expect(leap(2012)).to.be.false;
  });
  it("All years not divisible are not leap years (2017)", function() {
    expect(leap(2016)).to.be.false;
  });
  it("All years not divisible are not leap years (2017)", function() {
    expect(leap(2018)).to.be.false;
  });
  it("All years not divisible are not leap years (2017)", function() {
    expect(leap(2019)).to.be.false;
  });
});
