// log every munber from 1 - input number of
//if number is divisable by 3 log fizz if 5 log buzz if both lod 'fizzBuzz'


let fizzBuzz = (num) => {
    let index = 1;

    let recurse = (i) => {
        if (i === num + 1) {
            return;
        } else if (i % 15 === 0) {
            console.log('FizzBuzz');
            return recurse(i + 1)
        } else if (i % 5 === 0) {
            console.log('Buzz');
            return recurse(i + 1)
        } else if (i % 3 === 0) {
            console.log('Fizz')
            return recurse(i + 1)
        } else {
            console.log(i)
            return recurse(i + 1)
        }

    }
    recurse(index)
}

let test = () => {
    console.log(fizzBuzz(30))
}
test()