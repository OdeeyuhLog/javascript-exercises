const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (allValues) {
  let total = 0;
  allValues.forEach((element) => {
    total = total + element;
  });
  return total;
};

const multiply = function (allValues) {
  let total = 1;
  allValues.forEach((element) => {
    total = total * element;
  });

  return total;
};

const power = function (number, powertimes) {
  let result = 1;

  for (let index = 0; index < powertimes; index++) {
    result *= number;
  }

  return result;
};

const factorial = function (number) {
  let result = 1;
  for (let index = 1; index < number; index++) {
    result *= index + 1;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
