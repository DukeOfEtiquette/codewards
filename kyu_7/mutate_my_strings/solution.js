function mutateMyStrings(stringOne, stringTwo){
  let newStr = stringOne + '\n';

  arrOne = stringOne.split('');
  arrTwo = stringTwo.split('');
  console.log(arrTwo);

  stringTwo.split('').forEach((element, index) => {
    if(stringOne[index] !== element){
      arrOne[index] = element;
      newStr += arrOne.join('') + '\n';
    }
  });

  return newStr;
}