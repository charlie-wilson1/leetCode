/*
sequence first two numbers are 1 then every number after that is the sum of the previous two.

fib seq: 1, 1, 2, 3, 5, 8, 13, 21, 34...,

function take in a position and returns what what element would be in the array assuming the fibonacci sequence was an ordered array

ex: fibo(4) => 3
fibo(9) => 34 
*/

let fibo = (pos) => {

  if (pos === 1 || pos === 2) {
    return 1;
  }

  let seq = [1, 1];
  let index = 0;
  while (index <= pos) {
    if (seq.length === pos) {
      return seq[seq.length - 1];
    } else {
      seq.push((seq[seq.length - 1]) + (seq[seq.length - 2]))
    }
  }

}

(function test() {
  console.log(fibo(2)) //3
  console.log(fibo(9)) //34
})()