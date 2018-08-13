function cubeOdd(arr) {
  if(!arr.every(x => typeof(x) === 'number'))
    return undefined;
  
  return arr.map(num => {
    return Math.pow(num, 3);
  }).reduce((a, c) => {
    return Math.abs(c%2) === 1 ? a + c : a;
  }, 0);
}