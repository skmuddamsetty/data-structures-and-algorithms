/**
 * @param {string} word
 * @return {boolean}
 * A - 65, a - 97, Z - 90, z - 122
 */
detectCapitalUse = word => {
  let capsCount = 0;
  for (let char of word) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      capsCount++;
    }
  }
  if (
    (capsCount === 1 &&
      (word[0].charCodeAt(0) >= 65 && word[0].charCodeAt(0) <= 90)) ||
    (capsCount > 1 && capsCount === word.length) ||
    capsCount === 0
  ) {
    return true;
  }
  return false;
};

console.log(detectCapitalUse('ffffffffffffffffffffF'));
