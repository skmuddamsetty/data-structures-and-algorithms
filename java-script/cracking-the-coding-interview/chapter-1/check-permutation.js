{
  /**
   * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
   * @param {string} s input string 1
   * @param {string} t input string 2
   * Solution #1
   */
  function checkPermutation(s, t) {
    // return true only if both strings are equal length
    // and
    // sorted string of s and sorted string of t are equal
    return s.length === t.length && sort(s) === sort(t);
  }

  function sort(s) {
    return s
      .split('') // converts the string to array by splitting each character
      .sort() // sorts the array
      .join(); // joins back the sorted array to string
  }

  checkPermutation('test', 'Estt');
}

{
  /**
   * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
   * @param {string} s input string 1
   * @param {string} t input string 2
   * Solution #2
   */
  function checkPermutation(s, t) {
    if (s.length !== t.length) return false; // return false if the strings length does not match
    let arr = Array(128).fill(0); // Assumption: ASCII

    // loop through the string 1 and increment the count accordingly
    for (let char of s) {
      arr[char.charCodeAt()]++;
    }
    // loop through the string 1 and decrement the count accordingly and if for any of the value,
    // if it is negative, we return false since we have encountered the characters in t which are not in string s
    for (let char of t) {
      arr[char.charCodeAt()]--;
      if (arr[char.charCodeAt()] < 0) {
        return false;
      }
    }
    return true;
  }

  checkPermutation('tttt', 'test');
}
