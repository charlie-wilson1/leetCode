let fibbo = (position) => {
    let sequence = [];
    let targetNumber;
    let recurse = () => {
        let index = sequence.length;
        if (sequence.length === 0 || sequence.length === 1) {
            sequence.push(1);
            return position === index ? sequence[index] : recurse()
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
   console.log(fibbo(12))
}
test();