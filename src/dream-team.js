const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //
  // remove line with error and write your code here
  //const members = ['   ', 1111, 'Lily', 'Oscar', true, null];
  let name = [];
  if (!Array.isArray(members)) {
    return false
  }
  //members = members.flat();
  members.forEach(member => {
    if (typeof member === 'string') {
      member = member.trim();
      name.push(member[0]);
    } 
  })
  name = name.sort().join('').toUpperCase().split('').sort().join('');
  console.log(name)
  return name
}

module.exports = {
  createDreamTeam
};
