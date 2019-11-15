/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let keyboardMap = {};
  keyboard.split('').forEach((char, i) => {
    keyboardMap[char] = i;
  });
  let prevVal = keyboardMap[word[0]];
  let currVal;
  let diff;
  let resultSum = keyboardMap[word[0]];
  for (let i = 1; i < word.length; i++) {
    currVal = keyboardMap[word[i]];
    diff = Math.abs(prevVal - currVal);
    resultSum = resultSum + diff;
    prevVal = currVal;
  }
  return resultSum;
};

console.log(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode'));
