function XO(str) {
  let xCounter = 0;
  let oCounter = 0;

  str = str.toLowerCase();

  str.split('').forEach((element) => {
    if(element === 'x')
      xCounter++;
    else if(element === 'o')
      oCounter++;
  });

  return xCounter === oCounter;
}