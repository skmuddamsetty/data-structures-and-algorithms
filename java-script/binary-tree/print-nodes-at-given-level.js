/**
 * Give an algorithm for printing the elements in the tree at given level
 * https://www.youtube.com/watch?v=o09HkkrQQM8&list=PLt4nG7RVVk1hXIW5w54uKEN25MqHNS7_A&index=8
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

    /**
     * This is iterative solution
     * @param {Node} root of the binary tree
     * @param {Number} level
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    printNodesAtLevelSol1(root = this.root, level) {
      let queue = [root, null];
      let node;
      let currentLevel = 1;
      while (queue.length) {
        if (currentLevel === level) {
          let size = queue.length;
          while (size > 0) {
            node = queue.shift();
            if (node != null) {
              console.log(node.key);
            }

            size--;
          }
          break;
        }
        let size = queue.length;
        while (size > 0) {
          node = queue.shift();
          if (node && node.left) queue.push(node.left);
          if (node && node.right) queue.push(node.right);
          size--;
        }
        if (queue.length > 0) {
          currentLevel++;
          queue.push(null);
        }
      }
    }

    /**
     * This solution uses recursion
     * @param {Node} root of the binary tree
     * @param {Number} level
     * @param {Number} currentLevel defaulted to 1
     * Time Complexity: O(n) since we traverse all nodes
     * Space Complexity: O(n) for recursive stacks
     */
    printNodesAtLevelSol2(root = this.root, level, currentLevel = 1) {
      if (root === null) return;
      if ((level = currentLevel)) {
        console.log(root.key);
        return;
      }
      this.printNodesAtLevelSol2(root.left, level, currentLevel++);
      this.printNodesAtLevelSol2(root.right, level, currentLevel++);
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
  cbt.printNodesAtLevelSol2(cbt.root, 2);
}
