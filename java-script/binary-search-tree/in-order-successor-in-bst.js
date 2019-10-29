/**
 * Find Inorder Successor for given key in a BST
 * Given a BST, find inorder successor of a given key in it.
 * If the given key do not lie in the BST, then return the next greater
 * key (if any) present in the BST.
 * An inorder successor of a node in BST is the next node in inorder traversal of it.
 * For example, consider below bst:
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
 * A node’s inorder successor is node with least value in its right subtree i.e.
 * its right subtree’s left-most child. If right subtree of the node doesn’t exists,
 * then inorder successor is one of the ancestors of it. To find which ancestors
 * is the successor, we can move up the tree towards root until we encounter a node
 * which is left child of it’s parent. If any such node is found, the inorder successor
 * is its parent else inorder successor do not exists for the node.
 *
 * We can recursively check above conditions. The idea is to search for
 * given node in the tree and update the successor to current node before
 * visiting its left subtree. If the node is found in the BST, then
 * we return least value node in its right subtree and if the right
 * subtree of the node doesn’t exists, then inorder successor is one
 * of the ancestors of it which is already been updated while searching for the given key.
 *
 * https://www.techiedelight.com/find-inorder-successor-given-key-bst/
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
     * gets the inorder successor of the given key
     * @param {Node} root of the binary tree
     * @param {Number} key of the node
     * @return {Node} in order successor of the given key
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    getInOrderSuccessorInBST(root = null, key) {
      let inOrderSuccessor;
      while (root != null) {
        if (root.key === key) {
          if (root.right) {
            inOrderSuccessor = this.getMinElementInBST(root.right);
          }
          break;
        } else if (root.key > key) {
          inOrderSuccessor = root;
          root = root.left;
        } else {
          root = root.right;
        }
      }
      return inOrderSuccessor;
    }

    /**
     *
     * @param {Node} node
     * @return {Node} min element for the given root
     */
    getMinElementInBST(root = null) {
      while (root != null && root.left != null) {
        root = root.left;
      }
      return root;
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
  bst.getInOrderSuccessorInBST(bst.root, 13);
}
