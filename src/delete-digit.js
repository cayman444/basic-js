const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n.toString().split('');

  const allVariants = arrN.reduce((acc, _, ind, arr) => {
    let currentArr = [...arr];
    currentArr.splice(ind, 1);
    acc[ind] = currentArr;
    return acc;
  }, {});

  const AllNumbers = Object.values(allVariants).map((el) => +el.join(''));

  return Math.max(...AllNumbers);
}

module.exports = {
  deleteDigit
};
