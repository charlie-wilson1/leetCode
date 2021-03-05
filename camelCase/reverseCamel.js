// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

let breakCamel = (str) => {
    let splitString = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            console.log('true', i)
            splitString.push(' ', str[i])
        } else {
            splitString.push(str[i])
        }
    }
    return splitString.join('')
}

let test = () => {
    console.log(breakCamel("camelCasing"))
}
test();