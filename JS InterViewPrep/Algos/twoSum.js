// let twoSum = (arr, target) => {
//     let len = arr.length;
//     let mid = Math.floor(len / 2);
//     let evenOrOdd = (len % 2 == 0) ? mid - 1 : mid;
//     let alreadyAdded = {}
//     let result = [];
//     for (let i = 0; i <= evenOrOdd; i++) {
//         for (let j = 0; j < len; j++) {
//             if (arr[i] + arr[j] === target) {
//                 if (alreadyAdded[i +j]) {
//                     continue;
//                 } else {
//                     result.push([arr[i], arr[j]]);
//                     alreadyAdded[i + j] = true;
//                 }
//             }
//         }
//     }
//     return result;
// }

//O(n) solution 
let twoSum = (arr, target) => {
    //create an empty array that the length of the target sum to use like hashtable
    let hashtable = new Array(target + 1);
    //create array to return at the end with tuples that add up to target
    let result = [];

    //iterate over th input array
    for(var i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let counterPart = target - currNum;
        if (hashtable[counterPart] === counterPart) {
            console.log(hashtable[counterPart])
            result.push([currNum, counterPart])
        }
        if(!hashtable[currNum]) {
            hashtable[currNum] = currNum;
        }
    }
    return result
}

(function test() {
    let result = twoSum([1,6,4,5,3,3], 7) //[[6,1],[3,4],[3,4]]
    console.log(JSON.stringify(result))
    
})()
