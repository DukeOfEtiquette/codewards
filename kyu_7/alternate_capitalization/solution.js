function capitalize(s){
  let evenStr = '', oddStr = '';
  
  s.split('').forEach((e, i) => {
    if(i%2 === 0){
      evenStr += e.toUpperCase();
      oddStr += e.toLowerCase();
    }else{
      evenStr += e.toLowerCase();
      oddStr += e.toUpperCase();
    }
  })
  
  return [evenStr, oddStr];
};