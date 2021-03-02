/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]

Constraints:
2 <= nums.length <= 104
1 <= nums[i] <= 104
*/
var findErrorNums = function(nums) {
    let results = [];
    let checker = {};
   
    for (let ele of nums) {
        if (checker[ele] !== undefined) {
            results.push(ele)
        } else {
            checker[ele] = 1
        }
    }

    let sorted = nums.sort((a, b) => a - b);

    let fullSet = [...Array(nums.length + 1).keys()]
    fullSet.shift();
    
    fullSet.forEach((num, index) => {
        if (nums.indexOf(num) === -1) {
            results.push(num)
        }
    })

    return results;
};
let test = () => {
//   console.log(findErrorNums([1,3,3]));
  console.log(findErrorNums([1,5,3,2,2,7,6,4,8,9]))
}
test();