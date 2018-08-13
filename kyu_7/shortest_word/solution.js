function findShort(s){
  var arr = s.split(" ");
  var minLength = arr[0].length;
  for(var i = 1; i < arr.length; i++){
    if(minLength > arr[i].length){
      minLength = arr[i].length;
    }
  }
  return minLength;
}