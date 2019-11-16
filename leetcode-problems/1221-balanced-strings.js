/**
 * @param {string} s
 * @return {number}
 */
balancedStringSplit = s => {
  let resultCount = 0;
  let count = 0;
  for (let char of s) {
    if (char === 'R') {
      count++;
    }
    if (char === 'L') {
      count--;
    }
    if (count === 0) {
      resultCount++;
    }
  }
  return resultCount;
};

console.log(balancedStringSplit('RLLLLRRRLR'));
