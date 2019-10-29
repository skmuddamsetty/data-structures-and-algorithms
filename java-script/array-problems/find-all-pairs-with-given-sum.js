/**
 * Given an unsorted array of integers, find all pairs with given sum in it.
 */
{
  /**
   *
   * @param {Array} arr input array
   * @param {Numbe} sum to be found
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function findAllPairsWithGivenSum(arr = [], sum) {
    let map = new Map();
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let diff = sum - arr[i];
      if (map[diff] !== undefined) {
        results.push([map[diff], i]);
      } else {
        map[arr[i]] = i;
      }
    }
    return results;
  }

  findPairWithGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
}
