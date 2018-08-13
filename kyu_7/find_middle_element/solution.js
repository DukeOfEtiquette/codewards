var gimme = function (inputArray) {
  let cpyArr = inputArray.slice(0);
  inputArray.sort((a,b) => a - b);
  return cpyArr.findIndex(e => e === inputArray[1]);
};