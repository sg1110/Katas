module.exports = function stringCalculator(numbers) {
  if (numbers.includes(",\n"))
    return `Number expected but '\\n' found at position ${numbers.indexOf(
      ",\n"
    ) + 1}.`;
  if (numbers.charAt(numbers.length - 1) === ",")
    return "Number expected but EOF found";
  const numberArray = numbers
    .split(/\n|,/)
    .map(numberAsString => Number(numberAsString));
  let answer = numberArray.reduce((total, number) => (total += number));
  return answer === 0.0 ? answer.toFixed() : answer.toFixed(1);
};
