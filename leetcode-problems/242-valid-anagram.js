/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let arr = new Array(26).fill(0);
  let index;
  for (let char of s) {
    index = char.charCodeAt(0) - 97;
    arr[index] = arr[index] + 1;
  }
  for (let char of t) {
    index = char.charCodeAt(0) - 97;
    arr[index] = arr[index] - 1;
    if (arr[index] < 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
