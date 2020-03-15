function dictionaryReplacer(string, dictionary) {
  //optional
  if (!string.length) {
    return string;
  }

  for (const key in dictionary) {
    while (string.includes(`$${key}$`)) {
      for (const key in dictionary) {
        string = string.replace(`$${key}$`, dictionary[`${key}`]);
      }
    }
  }

  return string;
}

function dictionaryReplacer2(string, dictionary) {
  //optional
  if (!string.length) {
    return string;
  }

  for (const key in dictionary) {
    string = replaceAll(string, key, dictionary[`${key}`]);
  }

  function replaceAll(string, key, value) {
    return string.replace(new RegExp(`\\$${key}\\$`, "g"), value);
  }

  return string;
}

module.exports = {
  dictionaryReplacer,
  dictionaryReplacer2
};
