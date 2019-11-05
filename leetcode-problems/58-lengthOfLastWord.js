lengthOfLastWord = str => {
  str = str.trim();
  if (str.length === 1) return 1;
  let lengthOfLastWord = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      lengthOfLastWord++;
    } else {
      return lengthOfLastWord;
    }
  }
  return lengthOfLastWord;
};
console.log(lengthOfLastWord('    day'));
