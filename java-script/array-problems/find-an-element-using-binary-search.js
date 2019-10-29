/**
 * Find an element in the sorted array using binary search
 * https://www.youtube.com/watch?v=vh0jtsTXhno&list=PLamzFoFxwoNjw4EpaVZzP-8lqWA9hOmnD&index=5
 */
{
  /**
   * This is a recursive solution
   * @param {Array} arr sorted array
   * @param {Number} num to be found in the array
   * @param {Number} start defaulted to 0
   * @param {Number} end defaulted to length of the array
   * Time Complexity: O(logn)
   * Space Complexity: O(n) for recursive stack calls
   */
  function binarySearchRecursive(arr = [], num, start = 0, end = arr.length) {
    if (start >= arr.length) return 'Element not found in the array';
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) return mid;
    if (num < arr[mid]) {
      mid = this.binarySearchRecursive(arr, num, start, mid - 1);
    } else {
      mid = this.binarySearchRecursive(arr, num, mid + 1, end);
    }
    return mid;
  }

  /**
   * This is a iterative solution
   * @param {Array} arr sorted array
   * @param {Number} num to be found in the array
   * Time Complexity: O(logn)
   * Space Complexity: O(1)
   */
  function binarySearchIterative(arr = [], num) {
    let start = 0;
    let end = arr.length;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === num) return mid;
      if (num < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return 'Element not found in the array'; // this statement is executed only when we do not find the element in the array
  }

  //   binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 90);
  binarySearchIterative([1, 2, 3, 4, 5, 6, 7, 8, 9], 90);
}
