const reverseString = function (stringValue) {
  let arrayStr = stringValue.split('');
  let reversedStr = arrayStr.reverse();
  let finalStr = arrayStr.join('');

  return finalStr;
};

// Do not edit below this line
module.exports = reverseString;
