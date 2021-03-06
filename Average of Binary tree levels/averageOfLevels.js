/*
  Average of Levels in Binary Tree
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/
// function TreeNode(val, left, right) {
//     *     this.val = (val===undefined ? 0 : val)
//     *     this.left = (left===undefined ? null : left)
//     *     this.right = (right===undefined ? null : right)
//     * }
//     * 
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}
var averageOfLevels = function(root) {
    //implement a Queue; add the root to an array,
    let rootArr = [root];
    //declare result array, and
    let result = [];
    //iterate over the array with the root in it aslong as it had a length 
    while (rootArr.length) {
        //declare tempRootArrLen set to current lenght of rootArray
        let tempRootArrLen = rootArr.length;
        //declare a depthSum
        let depthSum = 0;
        //iterate over the array with the root in it
        for (let i = 0; i < tempRootArrLen; i++) {
            //remove first element and add it to depthSum
            let node = rootArr.shift();
            depthSum += node.val;
            //if this element has a left child
            //push to root Array
            if (node.left) {
                rootArr.push(node.left)
            }
            //if this element has a right child
            //push it to root Array
            if (node.right) {
                rootArr.push(node.right);
            }
        }
        //push depthSum diveid by tempRootArrLen to result
        result.push(depthSum / tempRootArrLen);
    }

    //return result
    return result;
};

let test = () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    let right = root.right = new TreeNode(20);
    right.left = new TreeNode(15);
    right.right = new TreeNode(7);
    console.log(averageOfLevels(root))
};
test();