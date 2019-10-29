/**
 * Give an algorithm to check if there are duplicate elements in the array or not
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(n^2) for nested loops
   * Space Complexity: O(1)
   */
  function dupFinderSol1(arr) {
    if (arr.length <= 0) {
      return false;
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Can we improve the complexity of dupFinderSol1
   * Sort the given array, and after sorting all the elements with equal values will be adjacent.
   * Now, do another scan on this sorted array
   * @param {Node} arr
   * Time Complexity:O(nlogn) assuming nlogn sorting algorithm.
   * Space Complexity: O(1)
   */
  function dupFinderSol2(arr) {
    if (arr.length <= 0) {
      return false;
    }
    // sort the given array.
    // for sorting with constant space O(1) we can use heap sort
    // here for simplicity purposes i have used the default sort method in javascript
    arr = arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) return true;
    }
    return false;
  }

  /**
   * Alternate way of solving this problem.
   * yes, using hash table.
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function dupFinderSol3(arr) {
    if (arr.length <= 0) {
      return false;
    }
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]] != undefined) return true;
      map[arr[i]] = 1;
    }
    return false;
  }

  dupFinderSol3([3, 2, 1, 2, 2, 3]);
}
