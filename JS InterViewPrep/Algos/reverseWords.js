/*
I: a single string, could contain multiple words separated
O: the input string with each word in it reversed
C: the string as a whole should not be reversed just each word in the string
E:
*/

//reverse a single word in linear time
let wordReverser = (word) => {
    let wordArr = word.split('');
    let len = wordArr.length;
    let mid = Math.floor(len / 2);
    let index = len - 1;
    while (index >= mid) { 
        let switchInd = len - index - 1;
        let temp = wordArr[index];
        wordArr[index] = wordArr[switchInd];
        wordArr[switchInd] = temp;
        index--;
    }
    return wordArr.join('');
}

let reverseWords = (str) => {
    let strArr = str.split(' ');
    
    let newStr = '';
    for (let i = 0; i < strArr.length; i++) {
        if (i === strArr.length - 1) {
            newStr += wordReverser(strArr[i]);
        } else {
            newStr += wordReverser(strArr[i]) + ' ';
        }
    }
    return newStr;

}

(function test() {
    console.log(reverseWords('this is a string of words')) // 'siht si a gnirts fo sdrow'
})()