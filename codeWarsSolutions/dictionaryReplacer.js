module.exports = function dictionaryReplacer(string, dictionary) {
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
};

//regex g attempt
// function replaceAll(string, key, value) {
//     // eslint-disable-next-line no-useless-escape
//     let regex = "$" + key + "$";
//     // console log $temp$ (same as variable ugh) but does not work : )))))
//     //let ugh = "$temp$"
//     //console.log(regex);
//     console.log(value)
//     return string.replace(new RegExp(regex, "g"), value);
//   }

// aaand another regex attempt
// for (const key in dictionary) {
//     // eslint-disable-next-line no-useless-escape
//     let replace = `\$${key}\$`;
//     let re = new RegExp(replace, "g");
//     string = string.replace(re, dictionary[`${key}`]);
//     // string = string.replace(`$${key}$`, dictionary[`${key}`]);
//   }
