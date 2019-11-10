/**
 * @param {character[]} chars
 * @return {number}
 */
compress = s => {
  let result = '';
  let startChar = s[0];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === startChar) {
      count++;
    } else {
      result = result + startChar + count;
      count = 1;
      startChar = s[i];
    }
  }
  result = result + startChar + count;
  return result;
};

compressArray = chars => {
  let startChar = chars[0];
  let currLastIndex = 0;
  let startCharIndex = 0;
  let count = 1;
  for (let i = 1; i < chars.length; i++) {
    if (startChar === chars[i]) {
      count++;
    } else {
      currLastIndex = currLastIndex + 1;
    }
  }
};

console.log(compressArray(['a', 'a', 'a', 'b', 'c', 'c', 'c']));
