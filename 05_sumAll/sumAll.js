const sumAll = function (num1, num2) {
  let finalsum = 0;

  if (
    num1 > 0 &&
    num2 > 0 &&
    typeof num1 === 'number' &&
    typeof num2 === 'number'
  ) {
    if (num1 > num2) {
      for (let index = num2; index <= num1; ++index) {
        finalsum += index;
      }
    } else if (num2 > num1) {
      for (let index = num1; index <= num2; ++index) {
        finalsum += index;
      }
    }
    return finalsum;
  } else {
    return 'ERROR';
  }
};

console.log(sumAll(1, 3));
// Do not edit below this line
module.exports = sumAll;
