longestCommonPrefix = (strs = []) => {
  let longestCommonPrefix = '';
  if (strs === null || strs.length === 0) return longestCommonPrefix;
  let index = 0;
  for (let c of strs[0]) {
    for (let i = 1; i < strs.length; i++) {
      if (index >= strs[i].length || c != strs[i][index]) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += c;
    index++;
  }
  return longestCommonPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flow']));
