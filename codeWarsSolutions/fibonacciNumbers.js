function fiboNacciNumbers(position) {
  if (position === 1) {
    return 0;
  }
  if (position === 2) {
    return 1;
  }
  let first = 0;
  let second = 1;
  let current;
  for (let i = 2; i < position; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current;
}

function fiboNacciNumbers2(position) {
  const goldenRatio = 1.6180343;
  return Number(
    (
      (Math.pow(goldenRatio, position - 1) -
        Math.pow(1 - goldenRatio, position - 1)) /
      Math.sqrt(5)
    ).toFixed(0)
  );
}

function fibo3(position) {
  const a = (1 / 89)
    .toString()
    .substring(2, 8)
    .split("");
  return Number(a[position - 1]);
}

module.exports = {
  fiboNacciNumbers,
  fiboNacciNumbers2,
  fibo3
};
