module.exports = function cyclicRotation(inputArray, rotation) {
  const length = inputArray.length;

  if (length < rotation) {
    while (length < rotation) {
      rotation = rotation - length;
    }
    return rotate(inputArray, length, rotation);
  }

  return rotate(inputArray, length, rotation);

  function rotate(array, length, rotation) {
    const newArray = inputArray.splice(length - rotation, length);
    return newArray.concat(inputArray);
  }
};
