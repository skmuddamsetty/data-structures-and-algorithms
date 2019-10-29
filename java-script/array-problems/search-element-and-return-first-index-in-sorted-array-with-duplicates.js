/**
 * Given a sorted array of integers containing duplicates,
 * write a program which returns the first index of an element.
 *
 * We can use binary search to find the element with a slight modification.
 * While checking if the mid element is the desired element,
 * ensure that mid-1 (if it exists) is smaller than desired element.
 * This will give us first index of the desired element.
 *
 * https://www.ideserve.co.in/learn/first-index-of-element-in-sorted-array-with-duplicates
 */
{
  /**
   *
   * @param {Array} arr sorted array
   * @param {Number} num to be searched
   * Time Complexity: O(logn)
   * Space Complexity: O(n) for recursive stacks
   */
  function searchElementAndReturnFirstIndex(arr = [], num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === num && (mid === end || arr[mid - 1] < num)) {
        return mid;
      }
      if (num < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  searchElementAndReturnFirstIndex([0, 1, 1, 2, 2, 4, 5, 5, 5, 5], 1);
}
