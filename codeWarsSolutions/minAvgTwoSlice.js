module.exports = function minAvgTwoSlice(inputNumbers) {
  let sums = [];

  for (let i = 0; i < inputNumbers.length; i++) {
    if (i === inputNumbers.length - 1) {
      sums.push(
        inputNumbers.reduce((total, number) => (total = total + number)) /
          inputNumbers.length
      );
    } else {
      sums.push((inputNumbers[i] + inputNumbers[i + 1]) / 2);
    }
  }

  console.log(sums);
  const lowestAvg = Math.min(...sums);
  const lowestIndex = sums.indexOf(lowestAvg);
  return lowestIndex;
};

// 4 2 2 5 = 3.25

// 4 2 2 = 2.66
// 2 2 5  = 3

// 4 2 = 3
// 2 2 = 2
// 2 5 = 3.5
