const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const [arrS1, arrS2] = [s1.split(''), s2.split('')];

  return arrS1.reduce((acc, el) => {
    const findElIndex = arrS2.indexOf(el);

    if (findElIndex !== -1) {
      acc += 1;
      arrS2.splice(findElIndex, 1);
    }

    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
