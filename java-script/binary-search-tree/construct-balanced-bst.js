/**
 * Construct balanced BST from given keys
 * Given an sorted array of integers which represents binary search tree keys,
 * construct a height balanced BST from it.
 * https://www.techiedelight.com/construct-balanced-bst-given-keys/
 */
{
  /**
   *
   * @param {Array} arr sorted array
   * @param {Number} start defaulted to zero
   * @param {Number} end defaulted to length of the array
   * if the array is not sorted, you can use any sorting mechanism to sort the array and then call this function
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function constructBalancedBST(arr = [], start = 0, end = arr.length) {
    if (end < start) {
      return;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new Node(arr[mid]);
    root.left = this.constructBalancedBST(arr, start, mid - 1);
    root.right = this.constructBalancedBST(arr, mid + 1, end);
    return root;
  }

  constructBalancedBST([1, 2, 3, 4, 5, 6]);
}
