/**
 * Give an algorithm to calculate the maximum depth of binary tree
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
     * This solution uses recursion.
     * Recursively calculates the height of left and right subtrees of a node
     * and assign height to the node as max of the heights of two children plus 1.
     * This is similar to preorder traversal
     * @param {Node} root of the binary tree
     * Time Complexity : O(n)
     * Space Complexity: O(n)
     */
    getHeightSol1(root = this.root) {
      let leftHeight,
        rightHeight = 0;
      if (root === null) return 0; // this is the base case
      leftHeight = this.getHeightSol1(root.left);
      rightHeight = this.getHeightSol1(root.right);
      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    }

    /**
     * This solution uses level order traversal i.e. without recursion.
     * @param {Node} root of the binary tree
     * Time Complexity : O(n)
     * Space Complexity: O(n)
     */
    getHeightSol2(root = this.root) {
      let queue = [root, null];
      let node;
      let count = 0;
      let size = queue.length;
      while (queue.length) {
        size = queue.length;
        while (size > 0) {
          node = queue.shift();
          if (node === null) {
            count++;
          } else {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
          }
          size--;
        }
        if (queue.length > 0) queue.push(null);
      }
      return count;
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
  cbt.getHeightSol2();
}
