function abbrevName(name){

  var names = name.split(' ');
  console.log(names);
  var res = `${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`;
  console.log(res);
  return res;
}