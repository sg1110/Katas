module.exports = function weight(weights) {
  return weights
    .split(" ")
    .sort(function(a, b) {
      if (digitSum(a) - digitSum(b) === 0) {
        return a.localeCompare(b);
      } else {
        return digitSum(a) - digitSum(b);
      }
    })
    .join(" ");
};

function digitSum(a) {
  return a
    .split("")
    .map(Number)
    .reduce(sum);
}

function sum(total, num) {
  return total + num;
}
