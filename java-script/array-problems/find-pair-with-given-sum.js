/**
 * Given an unsorted array of integers, find a pair with given sum in it.
 */
{
  /**
   *
   * @param {Array} arr input array
   * @param {Numbe} sum to be found
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function findPairWithGivenSum(arr = [], sum) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      let diff = sum - arr[i];
      if (map[diff] !== undefined) {
        console.log(
          'Sum with ' + sum + ' is present at indexes ' + map[diff] + ',' + i
        );
        break;
      } else {
        map[arr[i]] = i;
      }
    }
  }

  findPairWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
}
