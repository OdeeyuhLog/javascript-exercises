const ftoc = function (fValue) {
  let convertedValue = ((fValue - 32) * 5) / 9;

  if (Number.isInteger(convertedValue)) {
    return convertedValue;
  } else {
    return parseFloat(convertedValue.toFixed(1));
  }
};

const ctof = function (cValue) {
  let convertedValue = (cValue * 9) / 5 + 32;

  if (Number.isInteger(convertedValue)) {
    return convertedValue;
  } else {
    return parseFloat(convertedValue.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
