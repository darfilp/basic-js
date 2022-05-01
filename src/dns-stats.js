const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSStats = {};
  domains.map((domain) => {
    let array = domain.split(".").reverse();
    let newNameDomain = "";
    for (let i = 0; i < array.length; i++) {
      newNameDomain += `.${array[i]}`;
      if (DNSStats[newNameDomain] === undefined) {
        DNSStats[newNameDomain] = 1;
      } else {
        DNSStats[newNameDomain]++;
      }
    }
  });
  return DNSStats;
  
}

module.exports = {
  getDNSStats
};
