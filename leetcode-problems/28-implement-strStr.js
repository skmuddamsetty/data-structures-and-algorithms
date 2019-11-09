strStr = (haystack, needle) => {
  if (needle === null || needle.trim().length === 0) return 0;
  let needleLength = needle.length;
  let length = 0;
  let temp;
  while (length < haystack.length) {
    temp = haystack.substring(length, needleLength);
    if (temp === needle) {
      return length;
    }
    length++;
    needleLength++;
  }
  return -1;
};

console.log(strStr('hello', 'll'));
