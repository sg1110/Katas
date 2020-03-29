module.exports = function yahtzeeScorer(categoryName, diceValues) {
  const onesTwosThreesFoursFiveSixes = "one, two, three, four, five, sixes";
  const pair = "pair";
  const twoPairs = "two pairs";
  const fourOfAKind = "four of a kind";
  const smallStraight = "small straight";
  const largeStraight = "large straight";
  const fullHouse = "full house";
  const yahtzee = "yahtzee!";
  const chance = "chance!";

  switch (categoryName) {
    case onesTwosThreesFoursFiveSixes:
      return sumDiceValues(diceValues);
    case pair:
      return sumOfHighestDicePair(diceValues);
    case twoPairs:
      return sumOfTwoPairs(diceValues);
    case fourOfAKind:
      return sumOfFourOfAKind(diceValues);
    case smallStraight:
      return smallStraightScore(diceValues);
    case largeStraight:
      return largeStraightScore(diceValues);
    case fullHouse:
      return sumOfFullHouseScore(diceValues);
    case yahtzee:
      return yahtzeeScore(diceValues);
    case chance:
      return chanceScore(diceValues);
    default:
      return 0;
  }
};

function chanceScore(diceValues) {
  return sumDiceValues(diceValues);
}

function yahtzeeScore(diceValues) {
  const uniqueDice = new Set(diceValues);
  return uniqueDice.size === 1 ? 50 : 0;
}

function sumOfTwoPairs(diceValues) {
  let occurence = mapOccurence(diceValues);
  let filtered = Object.filter(occurence, die => die >= 2);
  if (Object.keys(filtered).length < 2 && !hasFourOfAKind(filtered)) return 0;
  if (hasFourOfAKind(filtered)) return Object.keys(filtered)[0] * 4;
  return Object.entries(filtered)
    .map(([die]) => die * 2)
    .reduce((total, score) => (total += score));
}

function sumOfFourOfAKind(diceValues) {
  if (hasFourOfAKind2(diceValues)) {
    const dieOccurence = mapOccurence(diceValues);
    const sortedByDieOccurence = sortObject(dieOccurence);
    return sortedByDieOccurence[0][0] * 4;
  } else {
    return 0;
  }
}

function sortObject(dieOccurence) {
  return Object.entries(dieOccurence).sort((die1, die2) => die2[1] - die1[1]);
}

function smallStraightScore(diceValues) {
  return diceValues.sort()[0] === 1 && hasStraight(diceValues) ? 15 : 0;
}

function largeStraightScore(diceValues) {
  return diceValues.sort()[0] === 2 && hasStraight(diceValues) ? 20 : 0;
}

function sumOfFullHouseScore(diceValues) {
  const occurence = mapOccurence(diceValues);
  const filtered = Object.filter(occurence, die => die >= 2);
  const sortedByDieOccurence = sortObject(filtered);
  if (sortedByDieOccurence[0][1] === 3 && sortedByDieOccurence[1][1] === 2) {
    return (
      Number(sortedByDieOccurence[0][0]) * 3 +
      Number(sortedByDieOccurence[1][0] * 2)
    );
  } else {
    return 0;
  }
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

function hasStraight(diceValues) {
  for (
    let dieLocation = 0;
    dieLocation < diceValues.length - 1;
    dieLocation++
  ) {
    if (diceValues[dieLocation + 1] !== diceValues[dieLocation] + 1) {
      return false;
    }
  }
  return true;
}

function hasFourOfAKind(filtered) {
  return Object.values(filtered)[0] >= 4 ? true : false;
}

function hasFourOfAKind2(dice) {
  return new Set(dice).size === 2 ? true : false;
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

Object.filter = (occurence, frequency) =>
  Object.keys(occurence)
    .filter(key => frequency(occurence[key]))
    .reduce((res, key) => ((res[key] = occurence[key]), res), {});
