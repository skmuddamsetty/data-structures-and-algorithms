/**
 * Determine if the given tree is a Binary Search Tree
 * https://www.techiedelight.com/determine-given-binary-tree-is-a-bst-or-not/
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
     * determines if the given tree is a bst or not
     * @param {Node} root of the binary search tree
     * Time Complexity: O(n)
     * Space Complexity: O(n) due to recursive stacks
     */
    isBST(root = null, max = Number.MAX_VALUE, min = Number.MIN_VALUE) {
      if (root === null) return true;
      return (
        root.key > min &&
        root.key < max &&
        this.isBST(root.left, root.key, min) &&
        this.isBST(root.right, max, root.key)
      );
    }
  }

  /**
   *                6
   *              /   \
   *             /     \
   *            2       8
   *           / \
   *          1   9
   *
   *
   * */
  let bst = new BinarySearchTree();
  bst.root = new Node(6);
  bst.root.left = new Node(2);
  bst.root.right = new Node(8);
  bst.root.left.left = new Node(1);
  bst.root.left.right = new Node(9);
  bst.isBST(bst.root);
}
