const fibonacci = function (nthNumber) {
  if (nthNumber < 0) {
    return 'OOPS';
  } else {
    let fibos = [0, 1];
    let firstIndex = 0;
    let secondIndex = 1;
    for (let index = 0; index < nthNumber; index++) {
      fibos.push(fibos[firstIndex] + fibos[secondIndex]);
      firstIndex++;
      secondIndex++;
    }

    return fibos[nthNumber];
  }
};

// Do not edit below this line
module.exports = fibonacci;
