//mean => average 
let mean = (arr) => {
    let sum = 0;

    arr.forEach(num => sum += num);

    return sum / arr.length;

}

/*
Median
1. Arrange your numbers in numerical order.
2. Count how many numbers you have.
3. If you have an odd number, divide by 2 and round up to get the position of the median number.
4. If you have an even number, divide by 2. Go to the number in that position and average it with the number in the next higher position to get the median.
*/
let median = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b);
    if (arr.length % 2 === 1) {
        let mid = Math.floor(arr.length / 2);
        return sortedArr[mid];
    } else {
        let mid = arr.length / 2;
        let av = ((sortedArr[mid] + sortedArr[mid - 1]) / 2);
        return av;
    }
}

//mode the number that occurs most often
let mode = (arr) => {
    let freakCounter = {};

    arr.forEach(num => {
        if (freakCounter[num]) {
            freakCounter[num]++;
        } else {
            freakCounter[num] = 1;
        }
    });

    let highestFreaks = Object.values(freakCounter).sort((a,b) => b - a);
    let higherFreak = [];
    for (let key in freakCounter) {
        if (freakCounter[key] === highestFreaks[0]) {
            higherFreak.push(key);
        } 
    }
    return higherFreak;
}

//all together
let meanMedianMode = (arr) => {
    let average = mean(arr);
    let middleVal = median(arr);
    let mostFreak = mode(arr);
    return {
        mean: `the mean val is ${average}`,
        median: `the meadian val is ${middleVal}`,
        mode: `the mode val(s) are ${mostFreak}`
    }

} 

(function test() {
    console.log(meanMedianMode([4,1,19,20,13,8,1]));
})()