/**
 * Maximum Subarray Problem (Kadane’s algorithm)
 * Given an array of integers, find contiguous subarray within it which has the largest sum.
 * https://www.techiedelight.com/maximum-subarray-problem-kadanes-algorithm/
 * https://www.youtube.com/watch?v=kekmCQXYwQ0
 */
{
  /**
   *
   * @param {Array} arr
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function maxSumSubArray(arr = []) {
    let max_so_far = arr[0];
    let max_end = 0;
    let start = 0;
    let end = 0;
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      max_end = max_end + arr[i];
      if (max_end > max_so_far) {
        max_so_far = max_end;
        start = s;
        end = i;
      } else if (max_end <= 0) {
        max_end = 0;
        s = i + 1;
      }
    }
    return [start, end];
  }

  //   maxSumSubArray([4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2]);
  maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
}
