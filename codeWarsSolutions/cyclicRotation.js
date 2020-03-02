module.exports = function cyclicRotation(inputArray, rotation) {
  const length = inputArray.length;
  const newArray = inputArray.splice(length - rotation, length);
  return newArray.concat(inputArray);
};
