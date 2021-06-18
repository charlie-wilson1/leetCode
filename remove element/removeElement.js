var removeElement = function(nums, val) {
    
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums.splice(i, 1);
                nums.push('');
                console.log(nums)
            }
        }
    return nums


};

(function test() {
        let vari = removeElement([3,2,2,3], 3)
console.log(vari)
})()