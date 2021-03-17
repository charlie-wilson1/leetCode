/*
function takes in a string and a number and returns the tring with each letter shifted by the input number
*/

let caesarCipher = (str, num) => {
    str = str.toLowerCase();
    //split string into an array
    let strArr = str.split('');
    //store the alphabet in a string
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // set length variable to length of alphabet minus one
    let len = alphabet.length - 1;
    //iterate over the string array
    for (let i = 0; i < strArr.length; i++) {
        // set index var to index of the current element of the string array in the alphabet
        let index = alphabet.indexOf(str[i]);
        //if the current element is a space, skip to next iteration
        if (strArr[i] === ' ') {
            continue;
        //otherwise if index plus the input num is greater then len
        } else if (index + num > len) {
            //declare replaceIndex var set to the index plus input num minus slpabe length minus one and replace the current element in the strArr with the element at replaceIndex in the alphabet string 
            let replaceInd = index + num - len - 1;
            strArr[i] = alphabet[replaceInd];
        } else {
            //ohterwise just replace the current elelment with the index of the alphabet string
            strArr[i] = alphabet[index + num];
        }
    
    }
    return strArr.join('');
}

let test = () => {
    console.log(caesarCipher('zoo keeper', 2)); // 'bqq mggrgt'
}
test();