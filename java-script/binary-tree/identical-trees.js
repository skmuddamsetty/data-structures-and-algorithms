/**
 * Give an algorithm to find if two binary trees are structurally identical
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
     * This solution uses recursion
     * @param {Node} root1 of the binary tree
     * @param {Node} root2 of the binary tree
     * Time Complexity: O(n)
     * Space Complexity: O(n) for recursive stack
     */
    isIdenticalSol1(root1, root2) {
      if (root1 === null && root2 === null) return true;
      if (root1.key != root2.key) return false;
      return (
        this.isIdentical(root1.left, root2.left) &&
        this.isIdentical(root1.right, root2.right)
      );
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

  let cbt1 = new BinaryTree();
  cbt1.root = new Node(8);
  cbt1.root.left = new Node(5);
  cbt1.root.right = new Node(4);
  cbt1.root.left.left = new Node(9);
  cbt1.root.left.right = new Node(7);
  cbt1.root.right.right = new Node(11);
  cbt1.root.left.right.left = new Node(1);
  cbt1.root.left.right.right = new Node(12);
  cbt1.root.right.right.left = new Node(3);
  cbt1.root.left.right.right.left = new Node(2);

  cbt.isIdentical(cbt.root, cbt1.root);
}
