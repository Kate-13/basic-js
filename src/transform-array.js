
module.exports = function transform(arr) {
  if(Array.isArray(arr) === false){
    throw Error();
  }
  newarr = [];
  for( let i = 0; i < arr.length; i++) {
    if(arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-prev' && arr[i] !== '--double-next') {
      if(arr[i-1] !== '--discard-next' ){
        newarr.push(arr[i]);
      }
      if(arr[i-1] === '--double-next') {
        newarr.push(arr[i]);
      }
    } else if(arr[i] === '--discard-prev' && arr[i-2] !=='--discard-next' ) {
      newarr.pop();
    } else if(arr[i] === '--double-prev' && arr[i-2] !== '--discard-next' && i !== 0) {
      newarr.push(arr[i-1]);
    }
  }
  return newarr;
};
