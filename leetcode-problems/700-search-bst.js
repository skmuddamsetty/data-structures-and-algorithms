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

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};

searchBST = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  if (val < root.val) {
    root = searchBST(root.left, val);
  } else {
    root = searchBST(root.right, val);
  }
  return root;
};

searchBSTIteration = (root, val) => {
  while (root != null && root.val != val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
};

let root = insertIntoBST(null, 10);
root = insertIntoBST(root, 2);
root = insertIntoBST(root, 15);
root = insertIntoBST(root, 20);
root = insertIntoBST(root, 11);
root = insertIntoBST(root, 8);
let result = searchBST(root, 15);
let iterationResult = searchBSTIteration(root, 15);
console.log('\n Recursion Result: \n', result);
console.log('\n Iteration Result: \n', iterationResult);
