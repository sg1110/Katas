module.exports = function frog(start, destination, jump) {
  if (destination - start < jump) {
    return 1;
  }
  return Number(((destination - start) / jump).toFixed(0));
};
