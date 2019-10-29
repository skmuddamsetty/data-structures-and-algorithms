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
     * Print all ancestors of the given key
     * @param {Node} root of the singly linked list
     * @param {Number} key to be searched
     * @param {Array} ancestorsArr defaulted to empty array
     */
    printAllAncestors(root, key, ancestorsArr = []) {
      if (root === null) return ancestorsArr;
      ancestorsArr.push(root.key);
      if (root.key === key) {
        ancestorsArr.pop();
        console.log(ancestorsArr);
        return;
      }
      if (root.left === null && root.right === null) {
        ancestorsArr.pop();
      }
      this.printAllAncestors(root.left, key, ancestorsArr);
      this.printAllAncestors(root.right, key, ancestorsArr);
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
  cbt.printAllAncestors(cbt.root, 2);
}
