

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
  if(( typeof sampleActivity == 'string') && (typeof Number(sampleActivity) =='number') && !isNaN(sampleActivity) && sampleActivity && Number.isInteger(Number(sampleActivity)) && (typeof value !== 'undefined')){
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
    result = t;
    return result;
  } else {
    return false;
  }
};
