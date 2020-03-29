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
  const smallStraight = "small straight";
  describe(`Scoring category -  ${smallStraight}`, () => {
    [
      { it: [1, 2, 3, 4, 5], expect: 15 },
      { it: [2, 1, 3, 5, 4], expect: 15 },
      { it: [3, 3, 3, 3, 4], expect: 0 },
      { it: [2, 2, 2, 2, 1], expect: 0 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(smallStraight, run.it)).to.equal(run.expect);
      })
    );
  });
  const largeStraight = "large straight";
  describe(`Scoring category -  ${largeStraight}`, () => {
    [
      { it: [2, 3, 4, 5, 6], expect: 20 },
      { it: [2, 1, 3, 5, 4], expect: 0 },
      { it: [3, 3, 3, 3, 4], expect: 0 },
      { it: [2, 2, 2, 2, 1], expect: 0 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(largeStraight, run.it)).to.equal(run.expect);
      })
    );
  });
  const fullHouse = "full house";
  describe(`Scoring category -  ${fullHouse}`, () => {
    [
      { it: [2, 2, 2, 3, 3], expect: 12 },
      { it: [5, 5, 6, 6, 6], expect: 28 },
      { it: [3, 3, 3, 3, 4], expect: 0 },
      { it: [2, 2, 2, 1, 1], expect: 8 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(fullHouse, run.it)).to.equal(run.expect);
      })
    );
  });
  const yahtzeee = "yahtzee!";
  describe(`Scoring category -  ${yahtzeee}`, () => {
    [
      { it: [2, 2, 2, 2, 2], expect: 50 },
      { it: [1, 1, 1, 1, 1], expect: 50 },
      { it: [3, 3, 3, 3, 4], expect: 0 },
      { it: [2, 2, 2, 1, 1], expect: 0 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(yahtzeee, run.it)).to.equal(run.expect);
      })
    );
  });
  const chance = "chance!";
  describe(`Scoring category -  ${chance}`, () => {
    [
      { it: [2, 2, 2, 2, 2], expect: 10 },
      { it: [1, 1, 1, 1, 1], expect: 5 },
      { it: [3, 3, 3, 3, 4], expect: 16 },
      { it: [2, 2, 2, 1, 1], expect: 8 }
    ].forEach(run =>
      it(`should calculate ${run.it} the score as ${run.expect}`, () => {
        expect(yahtzee(chance, run.it)).to.equal(run.expect);
      })
    );
  });
});
