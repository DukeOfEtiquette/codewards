function capitalize(s,arr){
  s = s.split('');

  arr.forEach(i => {
    if(i < s.length)
      s[i] = s[i].toUpperCase();
  })

  return s.join('');
};