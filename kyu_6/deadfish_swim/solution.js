module.exports = (function parse( data ){
  let val = 0;
  let arr = [];

  data.split('').forEach(c => {
    if(c === 'i')
      val++;
    else if(c === 'd')
      val--;
    else if(c === 's')
      val *= val;
    else if(c === 'o')
      arr.push(val);
  })

  return arr;
})