/**
 * Give an algorithm to find the diameter of the binary tree
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

    diameter(root = this.root) {
      if (root === null) return 0;
      let lHeight = this.getHeight(root.left);
      let rHeight = this.getHeight(root.right);
      let lDiameter = this.diameter(root.left);
      let rDiameter = this.diameter(root.right);
      let fd = Math.max(lHeight + rHeight + 1, Math.max(lDiameter, rDiameter));
      return fd;
    }

    getHeight(root = this.root) {
      let leftHeight,
        rightHeight = 0;
      if (root === null) return 0; // this is the base case
      leftHeight = this.getHeight(root.left);
      rightHeight = this.getHeight(root.right);
      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
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
  cbt.diameterSol2();
}
