function solution(str){
  function reverse(oldStr, newStr){
    if(oldStr.length == 0){
      return newStr;
    }else{
      newStr += oldStr[oldStr.length - 1];
      oldStr = oldStr.slice(0, -1);
      return reverse(oldStr, newStr)
    }
  }
  
  return reverse(str, '');
}