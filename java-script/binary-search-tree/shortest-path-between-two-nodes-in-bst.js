/**
 * Algorithm for finding the shortest path between two nodes in Binary Search Tree.
 * Shortest path is nothing but finding the lca of two nodes in the BST
 *
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

    /**
     *
     * @param {Number} key1
     * @param {Number} key2
     * @param {Node} root of the binary search tree
     * Time Complexity: O(n) for skewed trees
     * Space Complexity: O(n) for skewed trees
     */
    lca(key1, key2, root) {
      while (1) {
        // checking if key1 and key2 falls in the range of current root
        // i.e., key1<root.key<key2 || key1>root.key>key2
        // if there is a node that falls in this criteria, then this is the lca of two nodes
        if (
          (key1 < root.key && root.key < key2) ||
          (key1 > root.key && root.key > key2)
        ) {
          return root;
        }
        if (key1 < root.key) {
          root = root.left;
        } else {
          root = root.right;
        }
      }
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
  bst.lca(1, 5, bst.root);
}
