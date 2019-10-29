/**
 * Find a duplicate element in a limited range array
 * Given a limited range array of size n where array contains
 * elements between 1 to n-1 with one element repeating, find the duplicate number in it.
 */
{
  /**
   * Hashing solution
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function findDuplicateSol1(arr = []) {
    let map = {};
    for (let num of arr) {
      if (map[num] != undefined) {
        return true;
      }
      map[num] = true;
    }
    return false;
  }

  /**
   * XOR solution
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function findDuplicateSol2(arr = []) {
    let result = 0;
    for (let num of arr) {
      result = result ^ num;
    }
    for (let i = 1; i <= arr.length - 1; i++) {
      result = result ^ i;
    }
    return result;
  }

  findDuplicateSol2([1, 2, 3, 3, 4]);
}
