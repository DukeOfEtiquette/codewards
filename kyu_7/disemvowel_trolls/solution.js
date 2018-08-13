function disemvowel(str) {
  let regex = /[aeiou]/gi;
  return str.split('').filter(c => !c.match(regex)).join('');
}