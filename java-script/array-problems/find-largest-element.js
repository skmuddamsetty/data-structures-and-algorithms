/**
 * Find the largest element in the given array
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function findLargestElement(arr = []) {
    let largeElement = arr[0];
    for (let num of arr) {
      if (num > largeElement) {
        largeElement = num;
      }
    }
    return largeElement;
  }

  findLargestElement([9, 5, 3, 10]);
}
