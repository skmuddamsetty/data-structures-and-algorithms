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
    for (let num of arr) {
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    }
    console.log('Max Element-' + max, ', Min Element-' + min);
  }

  findSmallestAndLargest([9, 5, 3, 10]);
}
