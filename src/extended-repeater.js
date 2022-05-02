const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  let repeat = (options.repeatTimes) ? options.repeatTimes : result = 'TESTstrADD!';
  let separator = (options.separator) ? options.separator : '+';
  let addition = (options.addition || options.addition === false || options.addition === null) ? options.addition : '';
  let additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';

  for (let i = 0; i < repeat; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      result +=  (j !== additionRepeatTimes - 1) ? additionSeparator : '';
    }
    result += (i !== repeat - 1) ? separator : '';
  }

  return result;
}

module.exports = {
  repeater
};