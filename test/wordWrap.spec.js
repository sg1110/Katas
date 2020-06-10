const wrapper = require("../codeWarsSolutions/wordWrap");
const expect = require("chai").expect;

describe("Word wrapper", function() {
  it(`Should not divide the string to a given amount when it is longer than the string`, function() {
    expect(wrapper.wrapper("hello world", 20)).to.deep.equal(["hello world"]);
  });
  it(`Should divide the string to a given amount of characters without breaking up the strings`, function() {
    expect(wrapper.wrapper("hello world", 5)).to.deep.equal(["hello", "world"]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper("hello world", 8)).to.deep.equal(["hello", "world"]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper("123 567 901", 9)).to.deep.equal(["123 567", "901"]);
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.wrapper2("hello world", 20)).to.deep.equal(["hello world"]);
  });
  it("Should divide the string to a given amount of characters without breaking up the strings", function() {
    expect(wrapper.wrapper2("hello world", 5)).to.deep.equal([
      "hello",
      "world"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper2("hello world", 8)).to.deep.equal([
      "hello",
      "world"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper2("123 567 901", 9)).to.deep.equal([
      "123 567",
      "901"
    ]);
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.wrapper3("hello world", 20)).to.deep.equal(["hello world"]);
  });
  it("Should divide the string to a given amount of characters without breaking up the strings", function() {
    expect(wrapper.wrapper3("hello world", 5)).to.deep.equal([
      "hello",
      "world"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper3("hello world", 8)).to.deep.equal([
      "hello",
      "world"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper3("123 567 901", 9)).to.deep.equal([
      "123 567",
      "901"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper3("123 567 901 abc def ghi jkl", 6)).to.deep.equal([
      "123 567",
      "901 abc",
      "ghi jkl"
    ]);
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.wrapper4("hello world", 20)).to.deep.equal(["hello world"]);
  });
  it("Should divide the string if divider is at empty space", function() {
    expect(wrapper.wrapper4("hello 678", 5)).to.deep.equal(["hello", "678"]);
  });
  it.skip("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper4("veryveryverylongword yup", 8)).to.deep.equal([
      "veryveryverylongword",
      "yup"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper4("123 567 901", 9)).to.deep.equal([
      "123 567",
      "901"
    ]);
  });
  it.skip("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapper4("123 567 901 abc def ghi jkl", 6)).to.deep.equal([
      "123 567",
      "901 abc",
      "ghi jkl"
    ]);
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.recursiveWrap("hello world", 20)).to.equal("hello world");
  });
  it("Should divide the string if divider is at empty space", function() {
    expect(wrapper.recursiveWrap("hello 678", 5)).to.equal("hello\n678");
  });
  //can this happen?
  it.skip("Should move the next word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("veryveryverylongword yup", 8)).to.equal([
      "veryveryverylongword",
      "yup"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("123 567 901", 9)).to.equal("123 567\n901");
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("123 12 12", 3)).to.equal("123\n12\n12");
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.wrapWithForEach("hello world", 20)).to.deep.equal([
      "hello world"
    ]);
  });
  it("Should divide the string if divider is at empty space", function() {
    expect(wrapper.wrapWithForEach("hello 678", 5)).to.deep.equal([
      "hello",
      "678"
    ]);
  });
  //can this happen?
  it.skip("Should move the next word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapWithForEach("veryveryverylongword yup", 8)).to.equal([
      "veryveryverylongword",
      "yup"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapWithForEach("123 567 901", 9)).to.deep.equal([
      "123 567",
      "901"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapWithForEach("123 12 12", 3)).to.deep.equal([
      "123",
      "12",
      "12"
    ]);
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.wrapCountForward("hello world", 20)).to.deep.equal([
      "hello world"
    ]);
  });
  it("Should divide the string if divider is at empty space", function() {
    expect(wrapper.wrapCountForward("hello 678", 5)).to.deep.equal([
      "hello",
      "678"
    ]);
  });
  //can this happen?
  it.skip("Should move the next word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapCountForward("veryveryverylongword yup", 8)).to.equal([
      "veryveryverylongword",
      "yup"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapCountForward("123 567 901", 9)).to.deep.equal([
      "123 567",
      "901"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.wrapCountForward("123 12 12", 3)).to.deep.equal([
      "123",
      "12",
      "12"
    ]);
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.recursiveWrap2("hello world", 20)).to.equal("hello world");
  });
  it("Should divide the string if divider is at empty space", function() {
    expect(wrapper.recursiveWrap2("hello 678", 5)).to.equal("hello\n678");
  });
  //can this happen?
  it.skip("Should move the next word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap2("veryveryverylongword yup", 8)).to.equal([
      "veryveryverylongword",
      "yup"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap2("123 567 901", 9)).to.equal("123 567\n901");
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap2("123 567 901", 10)).to.equal("123 567\n901");
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap2("123 12 12", 3)).to.equal("123\n12\n12");
  });
});

describe("Word wrapper", function() {
  it("Should not divide the string to a given amount when N is longer than the string", function() {
    expect(wrapper.recursiveWrap("hello world", 20)).to.equal("hello world");
  });
  it("Should divide the string if divider is at empty space", function() {
    expect(wrapper.recursiveWrap("hello 678", 5)).to.equal("hello\n678");
  });
  //can this happen?
  it.skip("Should move the next word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("veryveryverylongword yup", 8)).to.equal([
      "veryveryverylongword",
      "yup"
    ]);
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("123 567 901", 9)).to.equal("123 567\n901");
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("123 567 901", 6)).to.equal("123\n567\n901");
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("123 567 901", 10)).to.equal("123 567\n901");
  });
  it("Should move the word to a new line when it would get divided in half ", function() {
    expect(wrapper.recursiveWrap("123 12 12", 3)).to.equal("123\n12\n12");
  });
});

describe("Given a string divide it into a line that is no more than specified limit", function() {
  it("should return the input string uncut when it is shorter than specifiec line limit", function() {
    expect(wrapper.recursiveWrapCountForward("hello", 8)).to.deep.equal([
      "hello"
    ]);
  });
  it("should wrap the line at the specified limit when breakpoint is at the space", function() {
    expect(wrapper.recursiveWrapCountForward("hello world", 5)).to.deep.equal([
      "hello",
      "world"
    ]);
  });
  it("should wrap the line at the previous space before the line limit when the breakpoint at the specified limit is not empty", function() {
    expect(wrapper.recursiveWrapCountForward("1234 678", 6)).to.deep.equal([
      "1234",
      "678"
    ]);
  });
  it("should wrap for more than 2 lines", function() {
    expect(wrapper.recursiveWrapCountForward("1234 678 901", 6)).to.deep.equal([
      "1234",
      "678",
      "901"
    ]);
  });
  it("should wrap words correctly with more than one word being on the same line", function() {
    expect(wrapper.recursiveWrapCountForward("1234 567 901", 7)).to.deep.equal([
      "1234",
      "567 901"
    ]);
  });
});
