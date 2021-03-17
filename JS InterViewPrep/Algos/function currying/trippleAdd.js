let tripleAdd = (a) => {
    return b => {
        return c => {
            return a + b + c
        }
    }
}

let getProduct = (num) => {
    return num2 => {
        return num * num2;
    }
}

let test = () => {
    console.log(tripleAdd(10)(20)(30))
    console.log(getProduct(2)(10))
}
test()