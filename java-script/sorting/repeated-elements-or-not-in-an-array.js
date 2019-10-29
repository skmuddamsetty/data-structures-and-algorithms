/**
 * Give an algorithm to find if there are repeated elements in the array or not.
 *
 */
{
  /**
   * Assume that we are not allowed to use additional space
   * (i.e., we can use a few temporary variables, O(1) storage)
   * @param {Array} arr input array
   * Time Complexity: O(n^2) since we have two loops
   * Space Complexity: O(1)
   */
  function repeatedElements(arr = []) {
    if (arr.length <= 0) return false;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * can we improve the time complexity of the above solution
   * (i.e., we can use a few temporary variables, O(1) storage)
   * @param {Array} arr input array
   * Time Complexity: O(n log(n))
   * Space Complexity: O(1)
   */
  function repeatedElements(arr = []) {
    if (arr.length <= 0) return false;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

  repeatedElements([9, 4, 3, 2, 3, 4]);
}
