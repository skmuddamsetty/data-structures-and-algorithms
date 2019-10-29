{
  /**
   * is Unique: Implement an algorithm to determine if a string has all unique characters.
   * What if you cannot use additional data structures?
   *
   * Other methods to solve the problem:
   * Compare every character of the string to every other character of the string. This will take O(n^2) time and 0(1) Space
   * Or
   * We could sort the string in O(n log(n)) time and then linearly check the string for neighbouring characters that are identical.
   *
   * Time Complexity: O(n), where n is the length of the string
   * Space Complexity: O(1)
   */
  function isUnique(s) {
    let arr = Array(26).fill(0); //intialize an empty array with 26 characters and fill each of them with 0
    s = s.toLowerCase(); // converting all leters to lowercase
    for (let char of s) {
      let value = char.charCodeAt() - 97; // subtracting 97 to get the position in which the char needs to be stored
      if (arr[value] != 0) {
        // if the value is not equal to 0, means that we have encountered the value for second time
        return false;
      } else {
        arr[value] = 1;
      }
    }
    return true; // if no dup character found, we return true
  }

  isUnique('abcda');
}
