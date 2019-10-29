/**
 * Check if subarray with 0 sum is exists or not.
 * Given an array of integers, check if array contains a sub-array having 0 sum.
 * https://www.techiedelight.com/check-subarray-with-0-sum-exists-not/
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function zeroSumSubArray(arr = []) {
    let sum = 0;
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (map[sum] !== undefined || sum === 0) {
        return true;
      }
      map[sum] = sum;
    }
    return false;
  }

  zeroSumSubArray([-3, 2, 1, 4]);
}
