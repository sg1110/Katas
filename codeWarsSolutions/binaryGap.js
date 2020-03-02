function binaryGap(n) {
  const binary = getBinary(n);
  const firstIndex = binary.indexOf("1") + 1;
  const lastIndex = binary.lastIndexOf("1");

  if (
    binary.split("").filter(x => Number(x) === 1).length === 1 ||
    binary.split("").filter(x => Number(x) === 0).length === 0
  ) {
    return 0;
  }

  if (binary.split("").filter(x => Number(x) === 1).length === 3) {
    const regex = /1(0+)(?=1)/g;
    const matchingGroups = binary.match(regex);
    return Number(
      matchingGroups.sort((a, b) => {
        return b.length - a.length;
      })[0].length - 1
    );
  }
  return lastIndex - firstIndex;
}

function getBinary(n) {
  return Number(n).toString(2);
}

module.exports = {
  binaryGap,
  getBinary
};

// WIP nonsense
// let exponent = 1;
// let baseTwoValues = [];
// let currentValue = 1;
// while (currentValue < n) {
//   currentValue = Math.pow(2, exponent);
//   baseTwoValues.push(currentValue);
//   exponent++;
// }
// console.log(baseTwoValues);
// return baseTwoValues;
