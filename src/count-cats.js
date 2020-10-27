
module.exports = function countCats(backyard) {
  let catCount = 0;
  for(let i = 0; i < backyard.length; i++){
    for(j = 0; j < backyard[i].length; j++){
      if(backyard[i][j] === '^^'){
        catCount = catCount + 1;
      };
    };
  };
  return catCount;

};
