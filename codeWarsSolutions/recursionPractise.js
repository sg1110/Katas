function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

function fibonacci(position) {
  if (position === 1) {
    return 0;
  }
  if (position <= 3) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
}
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

module.exports = { factorial, fibonacci };
