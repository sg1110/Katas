function regexSortedDuplicates(input) {
  let regex = new RegExp(/\b(\w+)\s+\1\b/);
  let array = input.split(" ").sort();
  let i = 0;
  let inputString = array.join(" ");
  while (i < array.length) {
    inputString = inputString.replace(regex, "$1");
    i++;
  }
  return inputString;
}

function regexOriginalStructure(input) {
  const set = new Set(input.split(" "));
  return Array.from(set).join(" ");
}
//const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

function getPostcode(input) {
  const regex = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/gi;
  return input.match(regex).join("");
}
function countLettersAndDigits(input) {
  let regex = /[^A-Za-z0-9]+/g;
  let punctuations = input.match(regex);
  punctuations !== null
    ? (punctuations = punctuations.join("").split("").length)
    : (punctuations = 0);
  return input.length - punctuations;
}
//smarter example >_<
// function countLettersAndDigits(s) {
//     return s.replace(/[^a-z\d]/gi,"").length;
//   }

function vowel(input) {
  const regex = /^[aeiou]$/;
  return regex.test(input);
}
//other
// String.prototype.vowel = function() {
//     return /^[aeiou]$/i.test(this)
// }
module.exports = {
  regexSortedDuplicates,
  regexOriginalStructure,
  getPostcode,
  countLettersAndDigits,
  vowel
};
