const { NotImplementedError } = require('../extensions/index.js');

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
  let array = [];
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (i != arr.length - 1) {
          array.push(arr[i + 1]);
        }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 2] != "--discard-next" && i != 0) {
        array.push(arr[i - 1]);
      } 
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] != "--discard-next" && i != 0) {
        array.pop(); 
      }
    } else if (arr[i] === '--discard-next') {
      if (i != arr.length - 1) {
        i++;
      }
    } else {
      array.push(arr[i]);
    }
  } 
  console.log(array)
  return array;
}

module.exports = {
  transform
};
