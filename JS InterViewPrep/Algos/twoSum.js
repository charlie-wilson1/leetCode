let twoSum = (arr, target) => {
    let len = arr.length;
    let mid = Math.floor(len / 2);
    let evenOrOdd = (len % 2 == 0) ? mid - 1 : mid;
    let alreadyAdded = {}
    let result = [];
    for (let i = 0; i <= evenOrOdd; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                if (alreadyAdded[i +j]) {
                    continue;
                } else {
                    result.push([arr[i], arr[j]]);
                    alreadyAdded[i + j] = true;
                }
            }
        }
    }
    return result;
}

(function test() {
    let result = twoSum([1,6,4,5,3,3], 7) //[[6,1],[3,4],[3,4]]
    console.log(JSON.stringify(result))
    
})()