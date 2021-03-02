/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {

    let recurse = (right, left, node) => {
        if (right)
    }
    
};

let test = () => {
    let root = new TreeNode(5)
    let rootRight = root.right = new TreeNode(4)
    let rootLeft = root.left = new TreeNode(1)
    rootRight.left = new TreeNode(3)
    rootRight.right = new TreeNode(6)
    console.log(root)
    console.log(isValidBST(root))
    console.log(new Array(1))
}
test()

