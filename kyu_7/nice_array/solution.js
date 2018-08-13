function isNice(arr){
  if(arr.length === 0)
    return false;

  let mapArr = arr.filter((e, i, a) => {
    let high = e+1;
    let low = e-1;

    let res = a.findIndex(el => el === high || el === low);

    return res > -1;
  });

  console.log(mapArr);
  
  return mapArr.length === arr.length;
}