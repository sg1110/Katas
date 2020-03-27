module.exports = function yahtzeeScorer(categoryName, diceValues) {
  const onesTwosThreesFoursFiveSixes = "one, two, three, four, five, sixes";
  const pair = "pair";
  const twoPairs = "two pairs";

  switch (categoryName) {
    case onesTwosThreesFoursFiveSixes:
      return sumDiceValues(diceValues);
    case pair:
      return sumOfHighestDicePair(diceValues);
    case twoPairs:
      return sumOfTwoPairs(diceValues);
    default:
      return 0;
  }
};

function sumOfTwoPairs(diceValues) {
  let occurence = mapOccurence(diceValues);

  Object.filter = (occurence, frequency) =>
    Object.keys(occurence)
      .filter(key => frequency(occurence[key]))
      .reduce((res, key) => ((res[key] = occurence[key]), res), {});

  let filtered = Object.filter(occurence, die => die >= 2);

  // let ff = Object.keys(occurence).filter(dieValue => occurence[dieValue] >= 2);
  // console.log(ff);

  if (Object.keys(filtered).length < 2 && !hasFourOfAKind(filtered)) return 0;
  if (hasFourOfAKind(filtered)) return Object.keys(filtered)[0] * 4;

  return Object.entries(filtered)
    .map(([die]) => die * 2)
    .reduce((total, score) => (total += score));
}

function hasFourOfAKind(filtered) {
  return Object.values(filtered)[0] >= 4 ? true : false;
}

function sumOfHighestDicePair(diceValues) {
  let occurence = mapOccurence(diceValues);
  let highestValues = 0;
  for (const die in occurence) {
    if (occurence[die] >= 2 && die > highestValues) {
      highestValues = die;
    }
  }
  return highestValues * 2;
}

function mapOccurence(diceValues) {
  let occurence = {};
  diceValues.forEach(die => {
    occurence[die] = occurence[die] ? occurence[die] + 1 : 1;
  });
  return occurence;
}

function sumDiceValues(diceValues) {
  return diceValues.reduce((total, die) => (total += die));
}
