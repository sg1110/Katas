module.exports = function minAvgTwoSlice(inputNumbers) {
  let currentLowestAvgStartIndex = 0;
  let currentLowestAvg = (inputNumbers[0] + inputNumbers[1]) / 2;

  for (let i = 1; i < inputNumbers.length; i++) {
    if ((inputNumbers[i] + inputNumbers[i + 1]) / 2 < currentLowestAvg) {
      currentLowestAvgStartIndex = i;
      currentLowestAvg = (inputNumbers[i] + inputNumbers[i + 1]) / 2;
    }
    if (
      (inputNumbers[i] + inputNumbers[i + 1] + inputNumbers[i + 2]) / 3 <
      currentLowestAvg
    ) {
      currentLowestAvgStartIndex = i;
      currentLowestAvg = (inputNumbers[i] + inputNumbers[i + 1]) / 3;
    }
  }
  if (
    inputNumbers.reduce((total, number) => (total += number)) /
      inputNumbers.length <
    currentLowestAvg
  ) {
    currentLowestAvgStartIndex = 0;
  }
  return currentLowestAvgStartIndex;
};
