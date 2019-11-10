/**
 * @param {string} s
 * @return {number}
 */
firstUniqChar = s => {
  let map = {};
  let index = 0;
  for (let char of s) {
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }
  for (let char of s) {
    if (map[char] === 1) {
      return index;
    }
    index++;
  }
  return -1;
};

console.log(firstUniqChar(''));
