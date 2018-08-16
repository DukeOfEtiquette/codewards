module.exports = (function high(x){
  let getScore = (word) => {
    return word.split('').reduce((a,c) => a + (c.charCodeAt(0)-96), 0);
  }

  let index = 0;
  let curHighScore = 0;
  let arr = x.split(' ');
  if(arr.length === 1) return arr[index];
  arr.forEach((word, i) => {
    let score = getScore(word);
    if(score > curHighScore){
      index = i;
      curHighScore = score;
    }
  });

  return arr[index];
});