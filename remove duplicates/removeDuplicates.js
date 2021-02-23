var removeDuplicates = function(nums) {
    let numsCopy = nums
    let index = 0
    while (index < numsCopy.length) {
        if (numsCopy[index] === numsCopy[index + 1]) {
            numsCopy.splice(index + 1, 1)
        } else {
            index++
        }
    }
    return numsCopy.length
};

let test = () => {
    console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
}
test()