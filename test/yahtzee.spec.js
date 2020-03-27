const yahtzee = require("../codeWarsSolutions/yahtzee");
const expect = require("chai").expect;

describe.only("Given yahtzee roll calculate the score", () => {
  const onesTwosThreesFoursFiveSixes = "one, two, three, four, five, sixes";
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
  const pair = "pair";
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
  const twoPairs = "two pairs";
  describe(`Scoring category -  ${twoPairs}`, () => {
    [
      { it: [1, 1, 2, 4, 4], expect: 10 },
      { it: [3, 3, 3, 4, 4], expect: 14 },
      { it: [1, 1, 2, 3, 4], expect: 0 },
      { it: [1, 1, 1, 1, 1], expect: 4 },
      { it: [1, 2, 3, 4, 5], expect: 0 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(twoPairs, run.it)).to.equal(run.expect);
      })
    );
  });
  const fourOfAKind = "four of a kind";
  describe(`Scoring category -  ${fourOfAKind}`, () => {
    [
      { it: [1, 1, 2, 4, 4], expect: 0 },
      { it: [3, 3, 3, 3, 4], expect: 12 },
      { it: [2, 2, 2, 2, 1], expect: 8 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(fourOfAKind, run.it)).to.equal(run.expect);
      })
    );
  });
});
