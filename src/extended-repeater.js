

module.exports = function repeater(str, options) {
  let result = '';
  let addition = '';
  let addseparator = '';
  let addresult = '';
  let separator = '';
  if(options.addition !== undefined){
    addition = options.addition;
      if(options.additionSeparator){
        addseparator = options.additionSeparator;
      } else if(!options.additionSeparator && options.addition) {
      addseparator =  '|';
        }
    if(options.additionRepeatTimes > 1){
      addresult = (addition + addseparator).repeat(options.additionRepeatTimes-1) + addition;
    } else if(options.additionRepeatTimes = 1){
      addresult = addition;
    }
  }else {
    addresult = '';
  }
if(options.separator){
  separator = options.separator;
} else {
  separator = '+';
}
if(options.repeatTimes > 1){
  result = str + addresult + separator;
  result = result.repeat(options.repeatTimes-1) + str + addresult;
} else if(options.repeatTimes = 1){
  result = str + addresult;
}
  return result;
};
