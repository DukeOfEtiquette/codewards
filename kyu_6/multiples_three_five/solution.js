module.exports = (function solution(number){
  if(number < 1) return 0;
  let arr = [...Array(number).keys()]

  return arr.reduce((a,c) => (c%3 === 0 || c%5 === 0) ? a+c : a)
});