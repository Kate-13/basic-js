
module.exports = function createDreamTeam(members) {
  let teamName = '';
  let letterarr = [];
  if(members && members.length !== 0 && Array.isArray(members) === true){
    for(let i = 0; i < members.length; i++){
      if(typeof members[i] === "string"){
        let name = members[i];
        let l = name.trim().slice(0,1).toUpperCase();
        letterarr.push(l);
        teamName = letterarr.sort().join('');
      };
    };
    if(teamName !== ''){
      return teamName;
    };
  } else return false;
}
