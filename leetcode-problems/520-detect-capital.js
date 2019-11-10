/**
 * @param {string} word
 * @return {boolean}
 * A - 65, a - 97, Z - 90, z - 122
 */
detectCapitalUse = word => {
  if (word.length === 1) return true;
  let isFirstLetterLowerCase =
    word[0].charCodeAt(0) >= 97 && word[0].charCodeAt(0) <= 122;
  let isFirstLetterUpperCase =
    word[0].charCodeAt(0) >= 65 && word[0].charCodeAt(0) <= 90;
  let isSecondLetterUpperCase =
    word[1].charCodeAt(0) >= 65 && word[1].charCodeAt(0) <= 90;
  let isSecondLetterLowerCase =
    word[1].charCodeAt(0) >= 97 && word[1].charCodeAt(0) <= 122;
  if (isFirstLetterUpperCase && isSecondLetterUpperCase) {
    for (let i = 2; i < word.length; i++) {
      if (!(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90)) {
        return false;
      }
    }
    return true;
  }
  if (isFirstLetterUpperCase && isSecondLetterLowerCase) {
    for (let i = 2; i < word.length; i++) {
      if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
        return false;
      }
    }
    return true;
  }
  if (isFirstLetterLowerCase && isSecondLetterLowerCase) {
    for (let i = 2; i < word.length; i++) {
      if (!(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90)) {
        return true;
      }
    }
  }
  return false;
};

console.log(detectCapitalUse('ffffffffffffffffffffF'));
