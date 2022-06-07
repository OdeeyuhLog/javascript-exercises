const leapYears = function (yearValue) {
  if (yearValue % 4 === 0 && yearValue % 100 != 0) {
    return true;
  }

  if (yearValue % 100 === 0 && yearValue % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
