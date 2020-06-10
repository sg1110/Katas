module.exports = function calculator(input, operation) {
  if (operation === "sum") {
    return sum(input);
  }
  if (operation === "average") {
    return average(input);
  }

  if (operation === "common") {
    return findMostCommonNumber(input);
  }

  if (operation === "lowestMissing") {
    return findLowestMissing(input);
  }

  if (operation === "primeNumber") {
    return findMaxPrime(input);
  }
};

function findMaxPrime(input) {
  let primeNumbers = [];
  input.forEach(number => {
    if (isPrime(number)) {
      primeNumbers.push(number);
    }
  });
  return Math.max(...primeNumbers);
}

function isPrime(number) {
  if (number % 2 === 0) {
    return false;
  }
  for (let divider = 3; divider <= Math.sqrt(number); divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
}

function findLowestMissing(input) {
  input = input.sort();
  for (let index = 0; index < input.length - 1; index++) {
    if (input[index] + 1 !== input[index + 1]) {
      return input[index] + 1;
    }
  }
  return 0;
}

function findMostCommonNumber(input) {
  let commonFrequency = 0;
  let commonNumber = 0;
  input.forEach(i => {
    let tempFrequency = 0;
    input.forEach(j => {
      if (i === j) {
        tempFrequency++;
      }
    });
    if (tempFrequency > commonFrequency) {
      commonFrequency = tempFrequency;
      commonNumber = i;
    }
  });
  return commonNumber;
}

function average(input) {
  return Math.floor(sum(input) / input.length);
}

function sum(input) {
  return input.reduce((total, number) => total + number);
}
