/*
return true if it is and false if not.
ignore any punctuation
*/

let isPalindrome = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        } else {
            arr.push(str[i]);
        }
    }
    let len = arr.length;
    let mid = len / 2;
    if (mid % 1 !== 0) {
        mid = Math.floor(mid);
    }
    let index = len - 1;
    while (index >= mid) {
        let subtract = index - (len - 1);
        let checkIndex = (index - subtract === 0) ? 0 : Math.abs(subtract);
        if (arr[index] !== arr[checkIndex]) {
            return false;
        }
        index--;
    }
    return true;
}

let test = () => {
    console.log(isPalindrome('race cars'))
}
test();