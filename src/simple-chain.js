const CustomError = require("../extensions/custom-error");

const chainMaker = {

  resultChain: [],

  getLength() {
    return this.resultChain.length;
  },

  addLink(value) {
    if(String(value)){
      this.resultChain.push(String(value));
    } else {
      this.resultChain.push('');
    }
    return this;
  },

  removeLink(position) {
    if(position > 0 && position <= this.resultChain.length){
      this.resultChain.splice(position - 1, 1);
      } else {
        this.resultChain = [];
        throw new Error();
      }
    return this;
  },

  reverseChain() {
    this.resultChain.reverse();
    return this;
  },

  finishChain() {
    let str = '';
    for (let i = 0; i < this.resultChain.length - 1; i++){
      str += '( ' + this.resultChain[i] + ' )~~';
    }
    if(this.resultChain.length > 0) {
      str += '( ' + this.resultChain[this.resultChain.length - 1] + ' )';
    }
    this.resultChain = [];
    return str;
  }
};

module.exports = chainMaker;
