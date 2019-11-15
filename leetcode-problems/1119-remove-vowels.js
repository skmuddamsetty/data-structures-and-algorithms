/**
 * @param {string} S
 * @return {string}
 */
removeVowels = S => {
  let result = [];
  for (let char of S) {
    if (
      char !== 'a' &&
      char !== 'e' &&
      char !== 'i' &&
      char !== 'o' &&
      char !== 'u'
    ) {
      result.push(char);
    }
  }
  return result.join('');
};

console.log(removeVowels('leetcodeisacommunityforcoders'));
