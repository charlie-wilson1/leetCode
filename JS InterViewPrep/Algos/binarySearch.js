

let binarySearch = (arr, target) => {

  let len = arr.length;
  let mid = Math.floor(len / 2);
  if (arr[mid] === target || arr[0] === target || arr[len] === target) {
    return true;
  } else if (len === 2 && arr[0] !== target && arr[1] !== target) {
    return false;
  } else if (target < arr[mid]) {
    let newArr = arr.slice(0, mid + 1);
    return binarySearch(newArr, target);
  } else {
    let greaterArr = arr.slice(mid, arr.length);
    return binarySearch(greaterArr, target);
  }
  
}

(function test() {
  let bSearch = binarySearch([5,7,12,16,36,39,42,56,71], 56)
  console.log(bSearch);
})()