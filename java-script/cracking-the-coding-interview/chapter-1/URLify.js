{
  /**
   * 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the given string has sufficient space at the end to hold the additional characters,
   * and that you are given the 'true' length of the string.
   * @param {string} s input string
   * @param {number} trueLength length of the string with trimmed white space
   */
  function urlify(s, trueLength) {
    s = s.split(''); // convert the string to char array
    let index = s.length; // get the length of the string
    // iterate through the trulength starting from last character as we have enough buffer in the end
    for (let i = trueLength - 1; i >= 0; i--) {
      // if the char === ' ' we need to replace the upcoming three characters with 0,2,% and decrement the index by 3
      if (s[i] === ' ') {
        s[index - 1] = '0';
        s[index - 2] = '2';
        s[index - 3] = '%';
        // decrement the index by 3 as we have take three available spaces in the string
        index = index - 3;
      } else {
        // if the char is no equal to ' ' the we can copy over the char to the current index
        s[index - 1] = s[i];
        // decrement the index by 1 as we have replaced just one char in the string
        index--;
      }
    }
    // return the join characters in the array
    return s.join('');
  }

  // there should be enough space at the end to fit the characters in the string
  // as we have two spaces to be replaced, the total spaces that needs to available for us are 6 2 * '%20' = 6 chars
  // as we already have two spaces available, at the end of the string we need to provide 4 (6-2) more spaces for the string to have enough space to fill in the chars without missing any char
  // for example if we have three spaces, then the buffer at the end should be 3 * '%20' = 9 chars, end buffer should be of 9 - 3 = 6 spaces
  let str = 'Mr John  Smith      ';
  urlify(str, str.trim().length);
}
