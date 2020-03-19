const report = require("../codeWarsSolutions/employees");
const expect = require("chai").expect;

describe.only("Employee report", function() {
  it("should show a list of employees, older than 18 years", function() {
    expect(report("listAbove18")).to.deep.equal(["Sepp", "Mike"]);
  });
  it("should sort names", function() {
    expect(report("sortByName")).to.deep.equal(["Max", "Mike", "Nina", "Sepp"]);
  });
  it("should show capitalize all names", function() {
    expect(report("capitalizeNames")).to.deep.equal([
      "MAX",
      "SEPP",
      "NINA",
      "MIKE"
    ]);
  });
  it("should sort names id descending order", function() {
    expect(report("sortNameInDescendingOrder")).to.deep.equal([
      "Sepp",
      "Nina",
      "Mike",
      "Max"
    ]);
  });
});

// const employees = [
//   { name: "Max", age: 17 },
//   { name: "Sepp", age: 18 },
//   { name: "Nina", age: 15 },
//   { name: "Mike", age: 51 }
// ];
// Rules
// Start with the first user-story and write at least one test for every requirement.
// Try not to look on future requirements upfront and follow the TDD-Cycle strictly.

// As shop owner I want to view a list of all employees, which are older than 18 years, so that I know who is allowed to work on Sundays.
// As shop owner I want the list of employees to be sorted by their name, so I can find employees easier.
// As shop owner I want the list of employees to be capitalized, so I can read it better.
// As shop owner I want the employees to be sorted by their names descending instead of ascending.
