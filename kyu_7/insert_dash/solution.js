function insertDash(num) {
  let prevEl, newStr = '';
  (''+num).split('').forEach((element, index) => {
    if(index === 0){
      newStr += element; // Always add the first one
    }
    else{
      if(prevEl%2 == 1 && element%2 == 1){
        newStr += '-';
      }
      newStr += element;
    }
    prevEl = element;
  });

   return newStr;
}