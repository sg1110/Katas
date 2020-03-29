module.exports = function stringCalculator(numbers) {
  if (numbers.match(/\/\/(.*?)\\n/g)) {
    const delimeter = numbers
      .match(/\/\/(.*?)\\n/g)[0]
      .replace(/\/\//, "")
      .replace(/\\n/, "");
    const beginingOfInput = numbers.indexOf("\\n") + 2;
    const answer = convertToNumberArray(
      numbers.substring(beginingOfInput),
      delimeter
    ).reduce(sum);
    return answer === 0.0 ? answer.toFixed() : answer.toFixed(1);
  }
  if (numbers.includes(",\n")) {
    return `Number expected but '\\n' found at position ${numbers.indexOf(
      ",\n"
    ) + 1}.`;
  }
  if (numbers.charAt(numbers.length - 1) === ",")
    return "Number expected but EOF found";
  const numberArray = convertToNumberArray(numbers, /\n|,/);
  let answer = numberArray.reduce(sum);
  return answer === 0.0 ? answer.toFixed() : answer.toFixed(1);
};

function convertToNumberArray(numbers, delimeter) {
  return numbers.split(delimeter).map(numberAsString => Number(numberAsString));
}

function sum(total, number) {
  return (total += number);
}
//   "//;\n1;2", expect: "3.0" },

//my regex /\/\/(.*?)\\n/g
