module.exports = function dictionaryReplacer(string, dictionary) {
  //optional
  if (!string.length) {
    return string;
  }

  for (const key in dictionary) {
    string = string.replace(`$${key}$`, dictionary[`${key}`]);
  }
  return string;
};
