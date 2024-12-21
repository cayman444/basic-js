const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  currentStr: [],

  addLink(value = "") {
    const currentValue = `${value}`;
    this.currentStr.push(currentValue ? `( ${currentValue} )` : "(  )");
    return this;
  },

  finishChain() {
    const res = this.currentStr.join("~~");
    this.currentStr = [];

    return res;
  },

  getLength() {
    return this.currentStr.length;
  },

  removeLink(position) {
    if (!this.currentStr[position - 1]) {
      this.currentStr = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.currentStr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.currentStr = this.currentStr.reverse();
    return this;
  },
};

module.exports = {
  chainMaker,
};
