

module.exports = class DepthCalculator {
  //depth = 0;
  calculateDepth(arr) {
    let count = 1;
    let depth = 1;
    for (let element of arr){
      if(Array.isArray(element)){
        depth = 1 + this.calculateDepth(element);
      };
      if(depth > count){
      count = depth;
      }
      depth = 1;
    }
    return count;
  }
};