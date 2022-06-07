const repeatString = function (stringValue, repeatTimes) {
  let resultString = '';
  if (repeatTimes >= 0) {
    for (let index = 0; index < repeatTimes; index++) {
      resultString += stringValue;
    }
    return resultString;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
