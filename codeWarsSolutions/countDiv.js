const math = require("mathjs");

function countDiv(start, end, diviser) {
  const range = math.range(start, end).toArray();
  let divisibleNumbers = [];
  range.forEach(number => {
    if (number % diviser === 0) {
      divisibleNumbers.push(number);
    }
  });
  return divisibleNumbers.length;
}

function countDiv2(start, end, diviser) {
  let currentNr = start;
  let divisibleNumbers = 0;
  for (currentNr; currentNr <= end; currentNr++) {
    if (currentNr % diviser === 0) {
      divisibleNumbers++;
    }
  }
  return divisibleNumbers;
}

module.exports = {
  countDiv,
  countDiv2
};
