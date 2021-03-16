/*
note: 'this is a secret note for you from a secret admirer'

magazine: 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer if but note that it is not as hard as it seems this is my advice for you'

both the note and the magazine clipping will be passed into the function and I need to determine if i can make that not out of the words that are in the clipping
*/

let returnObj = (str) => {
    let result = {};
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
            continue;
        } else if (result[strArr[i]] === undefined) {
            result[strArr[i]] = 1;
        } else {
            result[strArr[i]]++;
        }
    }
    return result;
}

let harmlessRansomeNote = (note, magSen) => {
    let noteObj = returnObj(note);
    let magObj = returnObj(magSen);

    for (let key in noteObj) {
        if (noteObj[key] > magObj[key]) {
            return false;
        }
    }
    return true;
}

const inputNote1 = 'this is a secret note for you from a secret admirer'; //false
const inputNote2 = 'this is a note for you from a secret admirer' //true
const magNote = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer if but note that it is not as hard as it seems this is my advice for you';

let test = () => {
    console.log(harmlessRansomeNote(inputNote1, magNote))
}
test()