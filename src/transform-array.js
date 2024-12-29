const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformCommand = new Set([
    "--double-next",
    "--double-prev",
    "--discard-next",
    "--discard-prev",
  ]);

  const resultArr = [...arr];

  arr.forEach((el, ind) => {
    switch (el) {
      case "--double-next":
        resultArr.splice(ind + 1, 0, resultArr[ind + 1]);
        break;
      case "--double-prev":
        resultArr.splice(ind - 1, 0, resultArr[ind - 1]);
        break;
      case "--discard-next":
        resultArr[ind + 1] = null;
        break;
      case "--discard-prev":
        resultArr[ind - 1] = null;
        break;
    }
  });

  return resultArr.filter((el) => el && !transformCommand.has(el));
}

module.exports = {
  transform,
};
