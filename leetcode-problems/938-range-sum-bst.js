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

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 * Complexity Analysis
 *
 *   Time Complexity: O(N), where N is the number of nodes in the tree.
 *
 *   Space Complexity: O(H), where H is the height of the tree.
 */
rangeSumBSTIterative = (root, L, R) => {
  let queue = [root];
  let node;
  let sum = 0;
  while (queue.length) {
    node = queue.shift();
    if (node != null) {
      if (L <= node.val && node.val <= R) sum += node.val;
      if (L < node.val) queue.push(node.left);
      if (node.val < R) queue.push(node.right);
    }
  }
  return sum;
};

let root = insertIntoBST(null, 10);
root = insertIntoBST(root, 2);
root = insertIntoBST(root, 15);
root = insertIntoBST(root, 20);
root = insertIntoBST(root, 11);
root = insertIntoBST(root, 8);
console.log(rangeSumBSTIterative(root, 8, 10));
