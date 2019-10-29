/**
 * Find the nth Largest element from the array
 */
{
  /**
   * This is Brute Force solution
   * @param {Array} arr input array
   * @param {Number} n
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   * This solution requires n loops to find the nth largest number in the array
   */
  function nthLargestElement(arr = [], n) {
    let maxIndex = 0;
    while (n > 0) {
      let largeElement = arr[0];
      for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > largeElement) {
          maxIndex = i;
          largeElement = arr[maxIndex];
        }
      }
      if (n != 1) {
        arr[maxIndex] = undefined;
        largeElement = arr[0];
        maxIndex = 0;
      }
      n--;
    }
    return arr[maxIndex];
  }

  nthLargestElement([9, 5, 3, 10, 11], 2);
}
