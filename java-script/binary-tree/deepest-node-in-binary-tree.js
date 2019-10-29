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

    deleteElementFromBinaryTree(root = this.root, key) {
      if (root === null) {
        return null;
      }
      if (root.key === key) {
        let deepesetNode = this.findDeepestNodeHelper(root);
        root.key = deepesetNode.key;
        deepesetNode = null;
        return root;
      }
      this.deleteElementFromBinaryTree(root.left, key);
      this.deleteElementFromBinaryTree(root.right, key);
      return root;
    }

    findDeepestNodeHelper(node) {
      if (node === null) return null;
      let queue = [node];
      let temp;
      while (queue.length) {
        temp = queue.shift();
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
      }
      return temp;
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
  cbt.deleteElementFromBinaryTree(cbt.root, 4);
}
