function calculateDistinctValues(inputArray) {
  return new Set(inputArray).size;
}
function calculateDistinctValues2(inputArray) {
  let distinctValues = 0;
  inputArray.sort();
  inputArray.forEach((number, index, inputArray) => {
    if (number ^ inputArray[index + 1]) {
      distinctValues++;
    }
  });
  return distinctValues;
}

module.exports = {
  calculateDistinctValues,
  calculateDistinctValues2
};
