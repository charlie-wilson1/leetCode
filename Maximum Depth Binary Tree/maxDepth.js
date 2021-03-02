/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var maxDepth = function(root) {
  // use a handler function since it's easier to write and think about recursive code this way. You start at a num/depth value of 1 because of the definition of depth.
let recurse = (root, depth) => {
    // here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
  if (root === null) {
    return 0;
  }
  // this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
  if (root.left === null && root.right === null) {
    return depth;
  }
  //Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
  if (root.left && root.right) {
    return Math.max(recurse(root.left, depth + 1), recurse(root.right, depth + 1));
  } else if (root.left !== null) {
    return recurse(root.left, depth + 1);
  } else {
    return recurse(root.right, depth + 1);
  }
}

return recurse(root, 1);


};

let test = () => {
let root = new TreeNode(3)
let rootRight = root.right = new TreeNode(20)
let rootLeft = root.left = new TreeNode(9)
rootRight.left = new TreeNode(15)
rootRight.right = new TreeNode(7)
//   console.log(root)
console.log(maxDepth(root))
}
test()