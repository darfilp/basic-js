const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this
  },
  removeLink(position) {
    if (isNaN(position) || position >= this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map((ch, index) => {
      if (index !== this.chain.length - 1) {
        return `( ${ch} )~~`
      } else {
        return `( ${ch} )`
      }
    });

    result = result.join('');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
