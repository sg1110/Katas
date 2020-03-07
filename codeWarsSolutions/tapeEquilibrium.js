module.exports = function tape(input) {
  let l = input.length - 1;
  let leftToRight = [];
  leftToRight.push(input[0]);

  let sumSoFar = input[0];
  for (let i = 1; i < input.length - 1; i++) {
    sumSoFar = sumSoFar + input[i];
    leftToRight.push(sumSoFar);
  }

  let rightToleft = [];
  input = input.reverse();
  let rightSumSoFar = input.reduce((a, b) => a + b) - input[l];
  rightToleft.push(rightSumSoFar);
  for (l = l - 1; l > 0; l--) {
    rightSumSoFar = rightSumSoFar - input[l];
    rightToleft.push(rightSumSoFar);
  }

  let answer = [];
  for (let i = 0; i < input.length - 1; i++) {
    answer.push(Math.abs(leftToRight[i] - rightToleft[i]));
  }

  return Math.min(...answer);
};
//3 4 6 10
//10 7 7 3
