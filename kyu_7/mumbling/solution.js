function accum(s){
  let newStr = [];

  s.split('').forEach((element, index) => {
    newStr.push(element.toUpperCase())
    newStr.push((element.toLowerCase()).repeat(index))
    newStr.push('-');
  })

  return newStr.join('').slice(0, -1);
}