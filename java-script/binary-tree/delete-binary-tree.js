/**
 * Give an algorithm for deleting the binary tree
 */
{
  class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }

    /**
     * Deletes the binary tree
     * Since we have to delete the child nodes first before deleting the parent node.
     * we use the postorder traversal as it does the work without stoting anything
     * We can also delete the tree with other traversals with extra space complexity.
     * @param {Node} root of the binary tree
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    deleteBinaryTree(root = this.root) {
      if (root === null) return;
      root.left = this.deleteBinaryTree(root.left);
      root.right = this.deleteBinaryTree(root.right);
      root = null;
      return root;
    }
  }

  /**
   *                8
   *              /   \
   *             /     \
   *            5       4
   *           / \       \
   *          9   7      11
   *             / \     /
   *            1  12   3
   *               /
   *              2
   */
  let cbt = new BinaryTree();
  cbt.root = new Node(8);
  cbt.root.left = new Node(5);
  cbt.root.right = new Node(4);
  cbt.root.left.left = new Node(9);
  cbt.root.left.right = new Node(7);
  cbt.root.right.right = new Node(11);
  cbt.root.left.right.left = new Node(1);
  cbt.root.left.right.right = new Node(12);
  cbt.root.right.right.left = new Node(3);
  cbt.root.left.right.right.left = new Node(2);
  cbt.deleteBinaryTree();
}
