const palindromes = function (words) {
  let wordsArr = words
    .split('')
    .join('')
    .toLowerCase()
    .replace(/[\s!&\/\\#,+()$~%.'":*?<>{}]/g, '');
  let reverseArr = wordsArr.split('').reverse().join('').toLowerCase();

  return reverseArr === wordsArr ? true : false;
};

console.log(palindromes('Racecar'));

// Do not edit below this line
module.exports = palindromes;
