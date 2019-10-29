/**
 * Give an algorithm for finding maximum element in binary tree using recursion and without recursion
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
     *
     * @param {Node} root of the binary tree
     * This solution uses level order traversal and queue i.e. without recursion
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    getMaximumElementSol1(root = this.root) {
      if (root === null) return null;
      // traverse each node and keep track of the max element found
      // Here I'm using level order traversal
      let currMax = Number.MIN_VALUE;
      let queue = [root];
      let node;
      while (queue.length) {
        node = queue.shift();
        if (node.key > currMax) currMax = node.key;
        if (node.left != null) queue.push(node.left);
        if (node.right != null) queue.push(node.right);
      }
      return currMax;
    }

    /**
     *
     * @param {Node} root of the binary tree
     * This solution uses recursion
     * i.e. finds the maximum element in the left subtree,
     * maximum element in the right sub tree and compares it with the root
     * and returns the max value
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    getMaximumElementSol2(root = this.root) {
      let rootVal,
        left,
        right,
        max = Number.MIN_VALUE;
      if (root != null) {
        rootVal = root.key;
        left = this.getMaximumElementSol2(root.left);
        right = this.getMaximumElementSol2(root.right);
        if (left > right) {
          max = left;
        } else {
          max = right;
        }
        if (rootVal > max) {
          max = rootVal;
        }
      }
      return max;
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
  cbt.getMaximumElementSol2();
}
