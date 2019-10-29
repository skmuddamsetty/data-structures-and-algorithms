/**
 * Give an algorithm for printing the level order data in reverse order.
 * For example, the output for the below tree should 2 1 12 3 9 7 11 5 4 8
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
     * This solution uses level order traversal and a stack to store the elements that are being processed
     * @param {Node} root of the binary tree
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    printLevelOrderTraversalInReverseOrder(root = this.root) {
      if (root === null) return null;
      let queue = [root];
      let node;
      let stack = [];
      while (queue.length) {
        node = queue.shift();
        stack.unshift(node.key);
        if (node.right != null) {
          queue.push(node.right);
        }
        if (node.left != null) {
          queue.push(node.left);
        }
      }
      return stack.join(' ');
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
  cbt.printLevelOrderTraversalInReverseOrder();
}
