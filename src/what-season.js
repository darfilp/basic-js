const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 // let date = new Date(2017, 0, 11, 23, 45, 11, 500)
  if (!date) {
    return "Unable to determine the time of year!"
  };
//return 'Unable to determine the time of year!'

  if (!(date instanceof Date) ||(Object.getOwnPropertyNames(date).length > 0)) {
    throw Error("Invalid date!")
  }

  const month = Math.floor((date.getMonth() + 1) / 3 % 4);
  const months = ['winter', 'spring', 'summer', 'fall']

  
  return months[month]
}

module.exports = {
  getSeason
};
