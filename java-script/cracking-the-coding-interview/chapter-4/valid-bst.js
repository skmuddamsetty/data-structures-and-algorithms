{
  function validateBST(root) {
    if (root === null) {
      return true;
    }
    if (
      (root.right && root.right.key < root.key) ||
      (root.left && root.left.key > root.key)
    ) {
      return false;
    }
    return this.validateBST(root.left) && this.validateBST(root.right);
  }
  class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }
  /**
   * 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements,
   * write an algorithm to create a binary search tree with minimal height
   * @param {Array} arr this should be a sorted array
   */
  function minimalTree(arr) {
    return helper(arr, 0, arr.length - 1);
  }

  function helper(arr, start, end) {
    if (end < start) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);
    node.left = this.helper(arr, start, mid - 1);
    node.right = this.helper(arr, mid + 1, end);
    return node;
  }

  validateBST(minimalTree([1, 2, 3, 4, 5, 6]));
}
