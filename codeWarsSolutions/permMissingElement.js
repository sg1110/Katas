module.exports = function element(inputArray) {
  inputArray = inputArray.sort((a, b) => {
    return a - b;
  });
  let missing;
  if (inputArray[0] !== 1) {
    return 1;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] + 1 !== inputArray[i + 1]) {
      missing = inputArray[i] - 1;
    }
  }
  return missing;
};

// need to fix for nr 1
// let missing = array[0];
// let index = 0;
// while (array.length > index) {
//   if (array[index] !== missing + 1) {
//     missing = array[index];
//   }
//   index++;
// }
// return missing - 1;

// :)
// inputArray.forEach((number, index) => {
//   if (number + 1 === inputArray[index + 1] && index === 0) {
//     return (answer = 1);
//   }
//   if (number + 1 === inputArray[index + 1]) {
//     answer = number - 1;
//   }
// });
// return answer;
