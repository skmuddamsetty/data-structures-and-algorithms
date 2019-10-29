/**
 * Print all sub-arrays with 0 sum
 * Given an array of integers, print all sub-arrays with 0 sum.
 * https://www.techiedelight.com/find-sub-array-with-0-sum/
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function printAllSubArraysWithZeroSum(arr = []) {
    let map = {};
    let sum = 0;
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (map[sum] !== undefined || sum === 0) {
        if (sum === 0) {
          let subArray = [];
          for (let j = 0; j <= i; j++) {
            subArray.push(arr[j]);
          }
          results.push(subArray);
          if (map[sum] != undefined) {
            let subArray = [];
            let startIndex = map[sum] + 1;
            for (let j = startIndex; j <= i; j++) {
              subArray.push(arr[j]);
            }
            results.push(subArray);
          }
          map[sum] = i;
        } else {
          let subArray = [];
          let startIndex = map[sum] + 1;
          for (let j = startIndex; j <= i; j++) {
            subArray.push(arr[j]);
          }
          results.push(subArray);
        }
      } else {
        map[sum] = i;
      }
    }
    return results;
  }

  printAllSubArraysWithZeroSum([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]);
}
