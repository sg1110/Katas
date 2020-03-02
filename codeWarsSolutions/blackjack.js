module.exports = function score(input) {
  const cardsMap = {
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
    J: 10,
    Q: 10,
    K: 10,
    A: 1
  };

  let sumSoFar = input.reduce(
    (accumulator, card) => accumulator + cardsMap[card],
    0
  );

  return sumSoFar < 12 && input.includes("A") ? sumSoFar + 10 : sumSoFar;
};
