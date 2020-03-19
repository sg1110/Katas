module.exports = function converter(inputNumber) {
  if (inputNumber <= 10) {
    return convertNumbersBelow10(inputNumber);
  }
  let numeral = "";
  while (inputNumber >= 50) {
    inputNumber = inputNumber - 50;
    numeral = numeral + "L";
  }
  while (inputNumber > 10) {
    inputNumber = inputNumber - 10;
    numeral = numeral + "X";
  }
  return (numeral = numeral + convertNumbersBelow10(inputNumber));
};

function convertNumbersBelow10(inputNumber) {
  switch (inputNumber) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    case 9:
      return "IX";
    case 10:
      return "X";
    default:
      return "";
  }
}
