module.exports = function yahtzeeScorer(categoryName, diceValues) {
  const onesTwosThreesFoursFiveSixes = "one, two, three, four, five, sixes";
  const pair = "pair";

  switch (categoryName) {
    case onesTwosThreesFoursFiveSixes:
      return sumDiceValues(diceValues);
    case pair:
      return sumOfHighestDicePair(diceValues);
    default:
      return 0;
  }
};
function sumOfHighestDicePair(diceValues) {
  let occurence = {};
  diceValues.forEach(die => {
    occurence[die] = occurence[die] ? occurence[die] + 1 : 1;
  });
  let highestValues = 0;
  for (const die in occurence) {
    if (occurence[die] >= 2 && die > highestValues) {
      highestValues = die;
    }
  }
  return highestValues * 2;
}

function sumDiceValues(diceValues) {
  return diceValues.reduce((total, die) => (total += die));
}
