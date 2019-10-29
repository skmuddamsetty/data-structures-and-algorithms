/**
 * Sort Binary Array in Linear Time
 * Given an binary array, sort it in linear time and constant space. Output should print contain all zeroes followed by all ones.
 * https://www.techiedelight.com/sort-binary-array-linear-time/
 */
{
  /**
   *
   * @param {Array} arr binary array
   * Simple solution would be to count number of 0’s
   * present in the array (say k) and fill first k indices in the array by 0
   * and all remaining indices by 1.
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function sortBinaryArrayInLinearTimeSol1(arr = []) {
    let numberOfZeros = 0;
    for (let num of arr) {
      if (num === 0) {
        numberOfZeros++;
      }
    }
    for (let i = 0; i < numberOfZeros; i++) {
      arr[i] = 0;
    }
    for (let i = numberOfZeros; i < arr.length; i++) {
      arr[i] = 1;
    }
    return arr;
  }

  /**
   *
   * @param {Array} arr binary array
   * Instead of counting number of zeroes, if the current element is 0,
   * we can place 0 at next available position in the array.
   * After all elements in the array are processed, we fill all remaining indices by 1.
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function sortBinaryArrayInLinearTimeSol2(arr = []) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr[k++] = 0;
      }
    }
    for (let i = k; i < arr.length; i++) {
      arr[k++] = 1;
    }
    return arr;
  }

  /**
   *
   * @param {Array} arr binary array
   * We can also solve this problem in linear time by using partitioning logic of quicksort.
   * The idea is to use 1 as pivot element and make one pass of partition process.
   * The resultant array will be sorted.
   * Time Complexity: O(n)
   * Space Complexity: O(1);
   */
  function sortBinaryArrayInLinearTimeSol3(arr = []) {
    let pivot = 1;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
      }
    }
    return arr;
  }

  sortBinaryArrayInLinearTimeSol3([1, 0, 1, 0, 0, 0, 1]);
}
