function handScorer(firstHand, secondHand) {
  const suitsAndValues = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  };
  const firstHandValues = firstHand
    .split(" ")
    .map(card => suitsAndValues[card[0]]);
  const secondHandValues = secondHand
    .split(" ")
    .map(card => suitsAndValues[card[0]]);

  const firstHandSuits = firstHand.split(" ").map(card => card[1]);
  const secondHandSuits = secondHand.split(" ").map(card => card[1]);

  let winner;

  const firstHandScore = calculateHandScore(firstHandValues, firstHandSuits);
  const secondHandScore = calculateHandScore(secondHandValues, secondHandSuits);

  if (firstHandScore === secondHandScore) {
    return highestRank(firstHandValues, secondHandValues);
  }

  firstHandScore > secondHandScore ? (winner = "win") : (winner = "loss");
  if (firstHandScore === secondHandScore) winner = "tie";

  return winner;
}

function calculateHandScore(cardValues, cardSuits) {
  if (hasStraightFlush(cardValues, cardSuits)) {
    return 8;
  }
  if (hasFourOfAKind(cardValues)) {
    return 7;
  }
  if (hasFullHouse(cardValues)) {
    return 6;
  }
  if (hasFlush(cardSuits)) {
    return 5;
  }
  if (hasStraight(cardValues)) {
    return 4;
  }
  if (hasThreeOfAKind(cardValues)) {
    return 3;
  }
  if (hasAPair(cardValues)) {
    return 2;
  } else {
    return 0;
  }
}

function highestRank(firstHandValues, secondHandValues) {
  const firstHandLargestValue = Math.max(...firstHandValues);
  const secondHandLargestValue = Math.max(...secondHandValues);
  if (firstHandLargestValue === secondHandLargestValue) return "tie";
  if (firstHandLargestValue < secondHandLargestValue) return "loss";
  if (firstHandLargestValue > secondHandLargestValue) return "win";
}

function hasAPair(handValues) {
  const nrOfuniqueCards = new Set(handValues).size;
  return nrOfuniqueCards === 5 ? false : true;
}

function hasTwoPairs(handValues) {
  handValues.sort((a, b) => a - b);
  let pairs = [];
  for (let i = 1; i < 5; i++) {
    if (handValues[i] === handValues[i - 1]) {
      pairs.push(handValues[i]);
      i++;
    }
  }
  return pairs.length === 2 ? true : false;
}

function hasThreeOfAKind(handValues) {
  handValues.sort((a, b) => a - b);
  let occurence = {};
  for (const cardValue of handValues) {
    occurence[cardValue] = occurence[cardValue] + 1 || 1;
  }

  for (const cardValue in occurence) {
    if (occurence[cardValue] === 3) {
      return true;
    }
  }
  return false;
}

function hasStraight(handValues) {
  handValues.sort((a, b) => a - b);
  for (let i = 0; i < 5 - 1; i++) {
    if (handValues[i] + 1 !== handValues[i + 1]) {
      return false;
    }
  }
  return true;
}

function hasFlush(handSuits) {
  return new Set(handSuits).size === 1 ? true : false;
}

function hasFullHouse(handValues) {
  handValues.sort((a, b) => a - b);
  return hasTwoPairs(handValues) && hasThreeOfAKind(handValues) ? true : false;
}

function hasFourOfAKind(handValues) {
  handValues.sort((a, b) => a - b);
  let occurence = {};
  for (const cardValue of handValues) {
    occurence[cardValue] = occurence[cardValue] + 1 || 1;
  }

  for (const cardValue in occurence) {
    if (occurence[cardValue] === 4) {
      return true;
    }
  }
  return false;
}

function hasStraightFlush(handValues, handSuits) {
  return hasStraight(handValues) && hasFlush(handSuits) ? true : false;
}

module.exports = {
  handScorer,
  highestRank,
  hasAPair,
  hasTwoPairs,
  hasThreeOfAKind,
  hasStraight,
  hasFlush,
  hasFullHouse,
  hasFourOfAKind,
  hasStraightFlush
};
