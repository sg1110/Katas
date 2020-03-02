function oddOccurence(input) {
  // input = input.sort();
  let result = 0;
  for (const number of input) {
    result ^= number;
    //if same returns and assigns 0, if not same assigns new number
    //1010 and 1010 returns 0000
  }
  return result;
}

function oddOccurence2(inputArray) {
  let currentNumber = 0;
  let pairIndex = 1;
  const l = inputArray.length;
  let i = 0;
  inputArray = inputArray.sort();

  while (i < l) {
    if (currentNumber !== inputArray[i] && i === 0) {
      currentNumber = inputArray[i];
    } else if (currentNumber !== inputArray[i] && pairIndex === 2) {
      currentNumber = inputArray[i];
      pairIndex = 1;
    } else if (currentNumber === inputArray[i]) {
      pairIndex++;
    }
    i++;
  }
  return currentNumber;
}

module.exports = {
  oddOccurence,
  oddOccurence2
};
