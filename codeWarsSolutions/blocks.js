module.exports.sortBlocks = function(input) {
  const characters = input.split("");

  const letters = characters.filter(
    // eslint-disable-next-line use-isnan
    character => !Number(character)
  );

  const numbersArray = characters
    .filter(
      // eslint-disable-next-line use-isnan
      character => Number(character)
    )
    .sort();
  // .join("");

  const lowerCaseLettersArray = letters
    .filter(letter => letter === letter.toLowerCase())
    .sort();
  // .join("");

  const upperCaseLettersArray = letters
    .filter(letter => letter === letter.toUpperCase())
    .sort();

  const upperCaseLetters = splitToBlocks(upperCaseLettersArray);
  const lowerCaseLetters = splitToBlocks(lowerCaseLettersArray);
  const numbers = splitToBlocks(numbersArray);

  function splitToBlocks(repeatLetterArray) {
    let addFirst = [];
    let addLast = [];
    addFirst.push(repeatLetterArray[0]);
    for (let i = 1; i < repeatLetterArray.length; i++) {
      if (repeatLetterArray[i] === repeatLetterArray[i - 1]) {
        addLast.push("-");
        addLast.push(repeatLetterArray[i]);
      } else {
        addFirst.push(repeatLetterArray[i]);
      }
    }
    return addFirst.concat(addLast).join("");
  }

  return lowerCaseLetters + upperCaseLetters + numbers;
};

// function seperateRepeatingCharacters(characterArray) {
//   const hash = new Map();
//   for (let i = 0; i < characterArray.length; i++) {
//     if (hash.get(characterArray[i]) === undefined) {
//       hash.set(characterArray[i], true);
//     } else {
//       const value = hash.get(characterArray[i]);
//       if (value) {
//         hash.set(characterArray[i], !value);
//       }
//     }
//   }
//   let result = [];
//   hash.forEach((v, k) => {
//     if (!v) result.push(k);
//   });
//   return result;
// }

// console.log(seperateRepeatingCharacters(lowerCaseLetters));
