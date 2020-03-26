module.exports = function yahtzeeScorer(categoryName, diceValues) {
  const onesTwosThreesFoursFiveSixes = "one, two, three, four, five, sixes";
  const pair = "pair";

  if (categoryName === onesTwosThreesFoursFiveSixes) {
    return diceValues.reduce((total, die) => (total += die));
  }
  if (categoryName === pair) {
    let occurence = {};
    diceValues.forEach(die => {
      occurence[die] = occurence[die] ? occurence[die] + 1 : 1;
    });
    let highestValues = 0;

    // for (let [die, frequency] of Object.entries(occurence)) {
    //   if (frequency >= 2 && die > highestValues) {
    //     highestValues = die;
    //   }
    // }

    for (const die in occurence) {
      if (occurence[die] >= 2 && die > highestValues) {
        highestValues = die;
      }
    }
    return highestValues * 2;
  } else {
    return 0;
  }
};
