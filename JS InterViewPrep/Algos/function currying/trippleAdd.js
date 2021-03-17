let tripleAdd = (a) => {
    return b => {
        return c => {
            return a + b + c
        }
    }
}

let test = () => {
    console.log(tripleAdd(10)(20)(30))
}
test()