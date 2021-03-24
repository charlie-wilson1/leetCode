
let vowelSwitcher = (string) => {
  // declare an object with all the vowels both capital and lowercase and set values to true
  let vowelChars = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true
  }
  //split string into an array so its mutable
  let stringArray = string.split('');
  //declare a letter to switch variable
  let letterToSwitch = null;

  for (let i = 0; i < stringArray.length; i++) {
    // if a value has been assigned to letterToSwitch and the current element in the iteration is a vowel
    if (letterToSwitch && vowelChars[stringArray[i]] === true) {
      //temporarily save the current element
      let temp = stringArray[i];
      //set the current element to the first element in the letterToSwitch tuple
      stringArray[i] = letterToSwitch[0];
      //then set the element at the index of the the second element in the letterToSwitch tuple to the temp variable
      stringArray[letterToSwitch[1]] = temp;
      //reset the letterToSwitch tuple to be the current element and the current elements index
      letterToSwitch = [stringArray[i], i];

    //otherwise if there hasnt already been any value assigned to letterToSwitch and the curretn element is a vowel, set tuple to be current element and the index
    } else if (vowelChars[stringArray[i]] === true) {
      letterToSwitch = [stringArray[i], i];
    }
  }

  return stringArray.join('');
  
} 


(function test() {
  let test1 = vowelSwitcher('hello world');
  console.log(`this test should return 'hollo werld' and returned '${test1}'`);
  let test2 = vowelSwitcher('leetcode');
  console.log(`this test should return 'leotcede' and returned '${test2}'`);
  let test3 = vowelSwitcher('hElLo');
  console.log(`this test should return 'holLE' and returned '${test3}'`);
})()