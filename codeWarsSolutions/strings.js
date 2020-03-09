module.exports = function strings(string1, string2) {
  if (string1.length > string2.length) {
    return false;
  }
  let string1Index = 0;
  let string2Index = 0;

  while (string1Index < string1.length && string2Index < string2.length) {
    if (string1[string1Index] === string2[string2Index]) {
      string1Index++;
      string2Index++;
    } else {
      string2Index++;
    }
  }
  return string1Index === string1.length;
};
