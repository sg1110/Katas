function permCheck(input) {
  input = input.sort();
  const l = input.length;
  if (
    containsDuplicates(input, l) === true ||
    isInSequence(input, l) === false
  ) {
    return 0;
  }
  if (isInSequence(input, l) && containsDuplicates(input, l) === false) {
    return 1;
  }
}

function isInSequence(sortedInput, l) {
  for (let i = 0; i < l; i++) {
    return sortedInput[i] + 1 !== sortedInput[i + 1] ? false : true;
  }
}

function containsDuplicates(sortedInput, l) {
  for (let i = 0; i < l; i++) {
    if (sortedInput[i] === sortedInput[i + 1]) {
      return true;
    }
  }
  return false;
}

module.exports = {
  permCheck,
  isInSequence,
  containsDuplicates
};
