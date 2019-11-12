/**
 * @param {string} s
 * @return {boolean}
 * Complexity Analysis**
 *
 * Time complexity : O(n). Single loop upto string length is used.
 * Space complexity : O(1). Constant space is used.
 *
 */
checkRecord = s => {
  let aCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      aCount++;
      if (aCount === 2) return false;
    } else if (s[i] === 'L') {
      if (s[i + 1] === 'L' && s[i + 2] === 'L') {
        return false;
      }
    }
  }
  return true;
};

console.log(checkRecord('PPALL'));
