const expect = require("chai").expect;
const dictionaryReplacer = require("../codeWarsSolutions/dictionaryReplacer");

describe("Replace words in a given string based on the corresponding values in dictionary", function() {
  it("should not replace any values when the dictionary is empty", function() {
    expect(dictionaryReplacer.dictionaryReplacer("", {})).to.equal("");
  });
  it("should replace a value in a string when dictionary has only one value", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer("$temp$", { temp: "temporary" })
    ).to.equal("temporary");
  });
  it("should replace multiple values in a string with dictionary values", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer(
        "$temp$ here comes the name $name$",
        {
          temp: "temporary",
          name: "John Doe"
        }
      )
    ).to.equal("temporary here comes the name John Doe");
  });
  it("should replace multiple values in a string with dictionary values when some values occur mult. times", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer(
        "$temp$ $temp$ here comes the name $name$",
        {
          temp: "temporary",
          name: "John Doe"
        }
      )
    ).to.equal("temporary temporary here comes the name John Doe");
  });
  it("should not replace prefixed sufixed values in a string that are not found in dictionary", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer(
        "$tempaprampampam$ here comes the name $name$",
        {
          temp: "temporary",
          name: "John Doe"
        }
      )
    ).to.equal("$tempaprampampam$ here comes the name John Doe");
  });
});

describe("Replace words in a given string based on the corresponding values in dictionary", function() {
  it("should not replace any values when the dictionary is empty", function() {
    expect(dictionaryReplacer.dictionaryReplacer2("", {})).to.equal("");
  });
  it("should replace a value in a string when dictionary has only one value", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer2("$temp$", { temp: "temporary" })
    ).to.equal("temporary");
  });
  it("should replace multiple values in a string with dictionary values", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer2(
        "$temp$ here comes the name $name$",
        {
          temp: "temporary",
          name: "John Doe"
        }
      )
    ).to.equal("temporary here comes the name John Doe");
  });
  it("should replace multiple values in a string with dictionary values when some values occur mult. times", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer2(
        "$temp$ $temp$ here comes the name $name$",
        {
          temp: "temporary",
          name: "John Doe"
        }
      )
    ).to.equal("temporary temporary here comes the name John Doe");
  });
  it("should not replace prefixed sufixed values in a string that are not found in dictionary", function() {
    expect(
      dictionaryReplacer.dictionaryReplacer2(
        "$tempaprampampam$ here comes the name $name$",
        {
          temp: "temporary",
          name: "John Doe"
        }
      )
    ).to.equal("$tempaprampampam$ here comes the name John Doe");
  });
});
// Create a method that takes a string and a dictionary,
// and replaces every key in the dictionary pre and suffixed with a dollar sign,
// with the corresponding value from the Dictionary.

// Tests
// input : “”, dict empty,
// output:“”

// input : “\$temp\$“, dict [“temp”, “temporary”],
// output: “temporary”

// input : “\$temp\$ here comes the name \$name\$“, dict [“temp”, “temporary”] [“name”, “John Doe”],
// output : “temporary here comes the name John Doe”
