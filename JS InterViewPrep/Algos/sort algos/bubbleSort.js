/*
I: unsorted array 
O: the input array sorted


itrerate over the input arrray and check the element after the current element if the next element is greater than the current, switch places. It will take the length of the array - 1 times theought the array to completley sort the array worst case senerio. Each time through the highest number will get put to where it should be.
*/

let bubbleSort = (nums) => {

    let nTimes = nums.length - 1;

    let recurse = (arr) => {
        // console.log(arr)
        if (nTimes === 0) {
            return arr;
        } else {
            for (let i = 0; i < nTimes; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    let temp2 = arr[i + 1]
                    arr[i] = temp2;
                    arr[i + 1] = temp; 
                }
            }
            nTimes -= 1;
            return recurse(arr)
        }
    }
    return recurse(nums);
}

let test = () => {
    console.log(bubbleSort([3,5,2,7,1,13,4,10]))
}
test();