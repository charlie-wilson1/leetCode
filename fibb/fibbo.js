let fibbo = (position) => {
    let sequence = [];
    let targetNumber;
    let recurse = () => {
        let index = sequence.length;
        if (sequence.length === 0 || sequence.length === 1) {
            sequence.push(1);
            index = sequence.length;
            if (position === index) {
                targetNumber = sequence[index-1];
                return
            } else {
                return recurse();
            }
        } 
        if (index === position) {
            targetNumber = sequence[index-1];
            return; 
        } else {
            sequence.push((sequence[index-1]) + sequence[index-2]);
            return recurse();
        }
    }
    recurse();
    return targetNumber;
}

let test = () => {
    console.log('should all be true')
    console.log(fibbo(1) === 1)
    console.log(fibbo(2) === 1)
    console.log(fibbo(5) === 5)
    console.log(fibbo(7) === 13)
    console.log(fibbo(9) === 34)
    console.log(fibbo(12) === 144)
    console.log(fibbo(14) === 377)
    console.log(fibbo(15) === 610)
}
test();