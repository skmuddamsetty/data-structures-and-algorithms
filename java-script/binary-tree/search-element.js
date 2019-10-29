/**
 * Give an algorithm for searching an element in binary tree without recursion
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
     * @param {Node} root of the binary tree
     * @param {Number} key to be searched
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    searchElementSol1(root = this.root, key) {
      if (root === null) return false;
      if (root.key === key) return true;
      if (
        this.searchElementSol1(root.left, key) ||
        this.searchElementSol1(root.right, key)
      ) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * This solution uses level order traversal i.e. without recursion
     * @param {Node} root of the binary tree
     * @param {Number} key to be searched
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    searchElementSol2(root = this.root, key) {
      if (root === null) return false;
      let queue = [root];
      let node;
      while (queue.length) {
        node = queue.shift();
        if (node.key === key) return true;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      return false;
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
  cbt.searchElementSol2(cbt.root, 12);
}
