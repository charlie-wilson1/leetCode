let findFactorial = (num) => {
    let factorial = 1;
    let recurse = (num) => {
        if (num === 1) {
            return factorial
        } else {
            factorial *= num;
            return recurse(num - 1)
        }
    }
    recurse(num)
    return factorial;
}
let test = () => {
    console.log(findFactorial(4))
}
test();