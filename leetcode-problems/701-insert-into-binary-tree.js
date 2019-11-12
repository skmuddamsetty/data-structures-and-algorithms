/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

let root = insertIntoBST(null, 10);
root = insertIntoBST(root, 2);
root = insertIntoBST(root, 15);
root = insertIntoBST(root, 20);
root = insertIntoBST(root, 11);
root = insertIntoBST(root, 8);
console.log(root);
