/**
 * Insert into binary search tree
 * https://www.techiedelight.com/insertion-in-bst/
 */
{
  class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    /**
     *
     * @param {Number} key of the node
     * @param {Node} root of the Binary Search Tree
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    insert(key, root = null) {
      if (root === null) {
        return new Node(key);
      }
      if (key < root.key) {
        root.left = this.insert(key, root.left);
      }
      if (key > root.key) {
        root.right = this.insert(key, root.right);
      }
      return root;
    }

    getKthSmallestElementInBST(root = null, count = 0, k) {
      this.getKthSmallestElementInBST(root.left, count++, k);
      if (count === k) {
        return root;
      }
      this.getKthSmallestElementInBST(root.right, count++, k);
    }
  }

  /**
   *                10
   *              /   \
   *             /     \
   *            8      11
   *           /        \
   *          2         14
   *         / \        / \
   *        1   6      13 16
   *           /
   *          4
   *         / \
   *        3   5
   *
   *
   * */
  let bst = new BinarySearchTree();
  bst.root = bst.insert(10);
  bst.root = bst.insert(8, bst.root);
  bst.root = bst.insert(11, bst.root);
  bst.root = bst.insert(2, bst.root);
  bst.root = bst.insert(14, bst.root);
  bst.root = bst.insert(1, bst.root);
  bst.root = bst.insert(6, bst.root);
  bst.root = bst.insert(13, bst.root);
  bst.root = bst.insert(16, bst.root);
  bst.root = bst.insert(4, bst.root);
  bst.root = bst.insert(3, bst.root);
  bst.root = bst.insert(5, bst.root);
  bst.getKthSmallestElementInBST(bst.root, 0, 2);
}
