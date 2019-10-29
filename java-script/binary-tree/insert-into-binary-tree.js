/**
 * Give an algorithm for inserting an element into binary tree
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
     * This solution uses level order traversal (without recursion)
     * Since in a Binary Tree an element can be inserted wherever whose node left child or right child is null
     * @param {Node} key to be inserted
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    insert(key) {
      if (this.root === null) {
        this.root = new Node(key);
      } else {
        let queue = [this.root];
        let node;
        while (queue.length) {
          node = queue.shift();
          if (node.left === null) {
            node.left = new Node(key);
            return node;
          } else {
            queue.push(node.left);
          }
          if (node.right === null) {
            node.right = new Node(key);
            return node;
          } else {
            queue.push(node.right);
          }
        }
      }
      return this.root;
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
  cbt.insert(8);
  cbt.insert(5);
  cbt.insert(4);
  cbt.insert(9);
  cbt.insert(7);
  cbt.insert(11);
  cbt.insert(1);
  cbt.insert(12);
  cbt.insert(3);
  cbt.insert(2);
  console.log(cbt.root);
}
