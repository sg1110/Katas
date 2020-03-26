module.exports = function stringCalculator(numbers) {
  const numberArray = numbers
    .split(",")
    .map(numberAsString => Number(numberAsString));
  let answer = numberArray.reduce((total, number) => (total += number));
  return answer === 0.0 ? answer.toFixed() : answer.toFixed(1);
};
