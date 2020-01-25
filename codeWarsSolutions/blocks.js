module.exports.sortBlocks = function(input) {
  const allLetters = input.split("");
  const lowerCaseLetters = allLetters
    .filter(letter => letter === letter.toLowerCase())
    .sort()
    .join("");
  const upperCaseLetters = allLetters
    .filter(letter => letter === letter.toUpperCase())
    .sort()
    .join("");

  return lowerCaseLetters + upperCaseLetters;
};
