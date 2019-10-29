/**
 * Sort an array containing 0’s, 1’s and 2’s (Dutch national flag problem)
 * https://www.techiedelight.com/sort-array-containing-0s-1s-2s-dutch-national-flag-problem/
 */
{
  /**
   *
   * @param {Array} arr
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   * Given an array containing only 0’s, 1’s and 2’s,
   * sort the array in linear time and using constant space.
   */
  function ducthNationalFlag(arr = []) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;
    while (mid <= high) {
      switch (arr[mid]) {
        case 0:
          let temp = arr[mid];
          arr[mid] = arr[low];
          arr[low] = temp;
          low++;
          mid++;
          break;
        case 1:
          mid++;
          break;
        case 2:
          let temp1 = arr[mid];
          arr[mid] = arr[high];
          arr[high] = temp1;
          high--;
          break;
      }
    }
    return arr;
  }

  ducthNationalFlag([0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]);
}
