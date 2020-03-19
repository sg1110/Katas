module.exports = function calculateSum(multiDimensionalNrArray) {
  multiDimensionalNrArray = multiDimensionalNrArray.flat(Infinity);
  return multiDimensionalNrArray.reduce(
    (accumulator, number) => accumulator + number
  );
};
