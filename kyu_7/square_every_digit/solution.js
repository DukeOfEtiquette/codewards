function squareDigits(num){
  num = (''+num).split(''); // Convert to array
  return parseInt(num.map(v => v*v).join(''));
}