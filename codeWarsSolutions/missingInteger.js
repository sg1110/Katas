module.exports = function missingInteger(array) {
  if (Math.max(...array) < 0) {
    return 1;
  }
  array = array.sort();
  let set = new Set(array);
  array = Array.from(set);

  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 !== array[i + 1]) {
      return array[i] + 1;
      //undefined when all consecutive and returns last value
    }
  }
};
