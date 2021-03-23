

let binarySearch = (arr, target) => {

  let len = arr.length;
  let mid = Math.floor(len / 2);
  if (arr[mid] === target || arr[0] === target || arr[len] === target) {
    return true;
  } else if (len === 2 && arr[0] !== target && arr[1] !== target) {
    return false;
  } else if (target < arr[mid]) {
    let newArr = arr.slice(0, mid + 1)
    // console.log(newArr)
    return binarySearch(newArr, target);
  } else {
    let greaterArr = arr.slice(mid, arr.length);
    // console.log(greaterArr);
    return binarySearch(greaterArr, target);
  }
  
}

(function test() {
  let bSearch = binarySearch([1,2,5,9,24,30,41,49,55,56,78,88], 1)
  console.log(bSearch);
})()