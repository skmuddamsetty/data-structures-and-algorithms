/**
 * Find largest and smallest element in the given array
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function findSmallestAndLargest(arr = []) {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (let i = 0; i <= arr.length - 1; i = i + 2) {
      let tempMax = Math.max(arr[i], arr[i + 1]);
      let tempMin = Math.min(arr[i], arr[i + 1]);
      if (tempMax > max) {
        max = tempMax;
      }
      if (tempMin < min) {
        min = tempMin;
      }
    }
    console.log('Max Element-' + max, ', Min Element-' + min);
  }

  findSmallestAndLargest([9, 5, 3, 10]);
}
