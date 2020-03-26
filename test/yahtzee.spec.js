const yahtzee = require("../codeWarsSolutions/yahtzee");
const expect = require("chai").expect;

describe.only("Given yahtzee roll calculate the score", () => {
  const onesTwosThreesFoursFiveSixes = "one, two, three, four, five, sixes";
  const pair = "pair";
  describe(`Scoring category - ${onesTwosThreesFoursFiveSixes}`, () => {
    [
      { it: [1, 1, 2, 4, 4], expect: 12 },
      { it: [6, 6, 6, 6, 6], expect: 30 },
      { it: [1, 1, 1, 1, 1], expect: 5 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(onesTwosThreesFoursFiveSixes, run.it)).to.equal(
          run.expect
        );
      })
    );
  });
  describe(`Scoring category -  ${pair}`, () => {
    [
      { it: [1, 1, 2, 4, 4], expect: 8 },
      { it: [3, 3, 3, 4, 4], expect: 8 },
      { it: [1, 1, 1, 1, 1], expect: 2 },
      { it: [1, 2, 3, 4, 5], expect: 0 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(pair, run.it)).to.equal(run.expect);
      })
    );
  });
});
