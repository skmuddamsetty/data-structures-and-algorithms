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

    getMinElementInBSTSol1(root = null) {
      while (root != null && root.left != null) {
        root = root.left;
      }
      return root;
    }

    /**
     *
     * @param {Node} root of the binary tree
     * This is Recursive solution
     */
    getMinElementInBSTSol2(root = null) {
      let node;
      if (root === null) {
        return null;
      }
      if (root.left === null) {
        return root;
      } else {
        node = this.getMinElementInBSTSol2(root.left);
      }
      return node;
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
  bst.getMinElementInBST(bst.root);
}
