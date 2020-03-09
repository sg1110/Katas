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
  const stop = end;
  let divisibleNumbers = [];
  for (currentNr; currentNr <= stop; currentNr++) {
    if (currentNr % diviser === 0) {
      divisibleNumbers.push(currentNr);
    }
  }
  return divisibleNumbers.length;
}

module.exports = {
  countDiv,
  countDiv2
};
