module.exports = function arrayPairSum(givenSum, givenIntegers) {
  let pairs = [];
  const integerCount = givenIntegers.length;
  for (let index = 0; index < integerCount; index++) {
    let unseenIntegerIndex = index + 1;
    while (unseenIntegerIndex < integerCount) {
      if (
        givenIntegers[index] + givenIntegers[unseenIntegerIndex] === givenSum &&
        givenIntegers[index] !== givenIntegers[unseenIntegerIndex] &&
        !pairs.includes(
          givenIntegers[unseenIntegerIndex] + " " + givenIntegers[index]
        )
      ) {
        pairs.push(
          givenIntegers[index] + " " + givenIntegers[unseenIntegerIndex]
        );
      }
      unseenIntegerIndex++;
    }
  }
  return pairs;
};
