

module.exports = function getSeason(date) {

  if(!date) {
    return 'Unable to determine the time of year!';
  };
  if( Object.prototype.toString.call(date) != '[object Date]') {
    throw new Error();
  };

  let season = '';
  let today = date;
  month = today.getMonth();

  if (month === 11 || (month >= 0 && month < 2)) {
    season = 'winter';
  } else if (month >= 2 && month < 5) {
    season = 'spring';
  } else if (month >= 5 && month < 8) {
    season = 'summer';
  } else season = 'autumn';

  return season;
};
