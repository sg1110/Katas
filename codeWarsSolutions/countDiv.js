const math = require("mathjs");

module.exports = function cov(start, end, diviser) {
  const range = math.range(start, end).toArray();
  let divisibleNumbers = [];
  range.forEach(number => {
    if (number % diviser === 0) {
      divisibleNumbers.push(number);
    }
  });
  return divisibleNumbers.length;
};
