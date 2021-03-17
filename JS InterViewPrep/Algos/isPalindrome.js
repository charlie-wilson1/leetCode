/*
return true if it is and false if not.
ignore any punctuation
*/

let isPalindrome = (str) => {
    str = str.toLowerCase();
    let charArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toUpperCase()) {
            charArr.push(str[i]);
        } else {
            continue;
        }
    }
    let len = charArr.length;
    let mid = len / 2;
    if (mid % 1 !== 0) {
        mid = Math.floor(mid);
    }
    let index = len - 1;
    while (index >= mid) {
        let subtract = index - (len - 1);
        let checkIndex = (index - subtract === 0) ? 0 : Math.abs(subtract);
        if (charArr[index] !== charArr[checkIndex]) {
            return false;
        }
        index--;
    }
    return true;
}

let test = () => {
    console.log(isPalindrome("Madam I'm Adam"))
}
test();