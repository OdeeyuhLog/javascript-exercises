const findTheOldest = function (array) {
  array.forEach((element) => {
    if (element.hasOwnProperty('yearOfDeath')) {
      element.yearsAlive = element.yearOfDeath - element.yearOfBirth;
    } else {
      let presentYear = new Date();
      element.yearsAlive = presentYear.getFullYear() - element.yearOfBirth;
    }
  });

  const result = array.sort((a, b) => b.yearsAlive - a.yearsAlive).shift();

  return result;
};

console.log;

// Do not edit below this line
module.exports = findTheOldest;
