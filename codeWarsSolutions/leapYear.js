module.exports = function leapYear(year) {
  return year % 400 === 0 ? true : false;
};
