/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
isCousins = (root, x, y) => {
  console.log(root);
  let parentNode;
  let currNode;
  let queue = [root];
  let level = 1;
  let map = {};
  while (queue.length && (map[x] === undefined || map[y] === undefined)) {
    currNode = queue.shift();
    if (currNode && (currNode.val === x || currNode.val === y)) {
      map[currNode.val] = { parentNode: parentNode, level: level };
    }
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
    parentNode = currNode;
    level++;
  }
  if (
    map[x] &&
    map[y] &&
    map[x].level === map[y].level &&
    map[x].parentNode.val !== map[y].parentNode.val
  )
    return true;
  return false;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.log(isCousins(root, 4, 5));
