module.exports = function missingInteger(array) {
  if (Math.max(...array.sort()) < 0) {
    return 1;
  }

  let set = new Set(array);
  array = Array.from(set);

  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 !== array[i + 1]) {
      return array[i] + 1;
      //undefined when all consecutive and returns last value
    }
  }
  //return Math.max(...array.sort()) + 1;
};

//...This operator causes the values in the array to be expanded, or “spread”, into the function’s arguments.
//[1, 3, 6, 4, 1, 2]
