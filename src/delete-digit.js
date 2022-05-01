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
  let result = [];
  let n1 = n.toString().split('');

  n1.forEach((item, index) => {
    n1 = n.toString().split('');
    n1.splice(index, 1, );
    result.push(n1)
  })

  result.sort()

  return +result[result.length - 1].join('');
 
}

module.exports = {
  deleteDigit
};
