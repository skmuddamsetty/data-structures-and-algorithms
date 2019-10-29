/**
 * Give an algorithm for finding the size of binary tree
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
     * If the node is null we return 0. this is the base case
     * If the node is not null we add one to each node and return to its parent
     * @param {Node} root of the binary tree
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    getSizeSol1(root = this.root) {
      if (root === null) return 0;
      return 1 + this.getSize(root.left) + this.getSize(root.right);
    }

    /**
     * This solution uses levele order traversal i.e. without recursion.
     *
     * @param {Node} root of the binary tree
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    getSizeSol2(root = this.root) {
      if (root === null) return 0;
      let queue = [root];
      let node;
      let count = 0;
      while (queue.length) {
        node = queue.shift();
        count++;
        if (node.left != null) {
          queue.push(node.left);
        }
        if (node.right != null) {
          queue.push(node.right);
        }
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
  cbt.getSizeSol2();
}
