let reverseArrayInPlace = (arr) => {
    let len = arr.length;
    let mid = Math.floor(len / 2);

    let index = len - 1;

    while (index >= mid) {
        let switchInd = len - index - 1;
        let temp = arr[index];
        arr[index] = arr[switchInd];
        arr[switchInd] = temp;
        index--;
    }

    return arr;
}

(function() {
    console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))
})()