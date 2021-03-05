/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens){
  if (parens[0] === ')') {
    return false;
  }
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
        count++;
    } 
    if (parens[i] === ')') {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
let test = () => {
    console.log(validParentheses(")(()))"))
}
test()