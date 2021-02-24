/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

var findDisappearedNumbers = function(nums) {
    let length = nums.length;
    let final = Array.from({length: length}, (_, i) => i + 1)

    for ( let i = 0; i < nums.length; i++) {
        let remove = final.indexOf(nums[i]) 
        if (remove >= 0) {
            final.splice(remove, 1)
        }
    }
    return final
};

let test = () => {
    console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
}
test()