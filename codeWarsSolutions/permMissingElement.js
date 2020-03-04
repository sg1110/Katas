module.exports = function element(array) {
  array = array.sort((a, b) => {
    return a - b;
  });
  let missing = array[0];
  let index = 0;
  while (array.length > index) {
    if (array[index] !== missing + 1) {
      missing = array[index];
    }
    index++;
  }
  return missing - 1;
};
//2, 3, 1, 5
// 2 3 4 5
