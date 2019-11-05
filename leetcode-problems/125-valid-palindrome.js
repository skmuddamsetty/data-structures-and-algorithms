validPalindrome = str => {
  if (str && str.trim().length === 0) return true;
  str = str.trim().toLowerCase();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (isAlphaNumeric(str[start]) && isAlphaNumeric(str[end])) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    } else if (!isAlphaNumeric(str[start])) {
      start++;
    } else if (!isAlphaNumeric(str[end])) {
      end--;
    }
  }
  return true;
};

isAlphaNumeric = str => {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

console.log(validPalindrome('race a ecar'));
