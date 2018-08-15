function diamond(n){
  if(n%2 === 0 || n < 3)
    return null;

  function getRow(middle, current){
    return ' '.repeat((middle-current)/2) + '*'.repeat(current) + '\n';
  }
  
  let str = '';
  let i;
  for(i = 1; i <= n; i+=2){
    str += getRow(n,i);
  }

  for(i-=4; i > 0; i-=2){
    str += getRow(n,i);
  }

  return str;
}