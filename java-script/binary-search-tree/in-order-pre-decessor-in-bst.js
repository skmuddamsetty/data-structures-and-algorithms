/**
 * Find Inorder Predecessor for given key in a BST
 *
 * Given a BST, find in-order predecessor of a given key in it.
 * If the given key do not lie in the BST, then return the previous
 * greater key (if any) present in the BST.
 * An in-order predecessor of a node in BST is the previous node in in-order traversal of it.
 *                10
 *              /   \
 *             /     \
 *            8      11
 *           /        \
 *          2         14
 *         / \        / \
 *        1   6      13 16
 *           /
 *          4
 *         / \
 *        3   5
 *
 * A node’s in-order predecessor is node with maximum value in its left sub tree
 * i.e. its left subtree’s right-most child. If left subtree of the node doesn’t exists,
 *  then in-order predecessor is one of the ancestors of it. To find which ancestors
 *  is the predecessor, we can move up the tree towards root until we encounter a
 * node which is right child of it’s parent. If any such node is found, the
 * in-order predecessor is its parent else in-order predecessor do not exists for the node.
 *
 * We can recursively check above conditions. The idea is to search for
 * given node in the tree and update the predecessor to current node before
 * visiting its right subtree. If the node is found in the BST, then we
 * return maximum value node in its left subtree and if the left subtree
 * of the node doesn’t exists, then in-order predecessor is one of the ancestors
 * of it which is already been updated while searching for the given key.
 *
 * https://www.techiedelight.com/find-inorder-predecessor-given-key-bst/
 */
{
  class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    /**
     *
     * @param {Number} key of the node
     * @param {Node} root of the Binary Search Tree
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    insert(key, root = null) {
      if (root === null) {
        return new Node(key);
      }
      if (key < root.key) {
        root.left = this.insert(key, root.left);
      }
      if (key > root.key) {
        root.right = this.insert(key, root.right);
      }
      return root;
    }

    /**
     * gets the inorder predecessor of the given key
     * @param {Node} root of the binary tree
     * @param {Number} key of the node
     * @return {Node} in order pre decessor of the given key
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    getInOrderPreDecessor(root = null, key) {
      let inOrderPreDecessor;
      while (root != null) {
        if (key < root.key) {
          root = root.left;
        } else if (key > root.key) {
          inOrderPreDecessor = root;
          root = root.right;
        } else {
          if (root.left) {
            inOrderPreDecessor = this.getMaxElementInBST(root.left);
          }
          break;
        }
      }
      return inOrderPreDecessor;
    }

    /**
     *
     * @param {Node} node
     * @return {Node} max element for the given root
     */
    getMaxElementInBST(root = null) {
      let node;
      if (root === null || root.right === null) {
        return root;
      } else {
        node = this.getMaxElementInBST(root.right);
      }
      return node;
    }
  }

  /**
   *                10
   *              /   \
   *             /     \
   *            8      11
   *           /        \
   *          2         14
   *         / \        / \
   *        1   6      13 16
   *           /
   *          4
   *         / \
   *        3   5
   *
   *
   * */
  let bst = new BinarySearchTree();
  bst.root = bst.insert(10);
  bst.root = bst.insert(8, bst.root);
  bst.root = bst.insert(11, bst.root);
  bst.root = bst.insert(2, bst.root);
  bst.root = bst.insert(14, bst.root);
  bst.root = bst.insert(1, bst.root);
  bst.root = bst.insert(6, bst.root);
  bst.root = bst.insert(13, bst.root);
  bst.root = bst.insert(16, bst.root);
  bst.root = bst.insert(4, bst.root);
  bst.root = bst.insert(3, bst.root);
  bst.root = bst.insert(5, bst.root);
  bst.getInOrderPreDecessor(bst.root, 16);
}
