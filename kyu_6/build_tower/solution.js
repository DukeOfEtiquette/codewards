module.exports = (function towerBuilder(nFloors) {
  let baseSize = 1+(2*(nFloors-1));
  function buildFloor(i){
    let nStars = 1+(2*(i));
    let padding = (baseSize - nStars)/2;
    return ' '.repeat(padding) + '*'.repeat(nStars) + ' '.repeat(padding);
  }

  let tower = [];
  for(let i = 0; i < nFloors; i++){
    tower.push(buildFloor(i));
  }

  return tower;
})