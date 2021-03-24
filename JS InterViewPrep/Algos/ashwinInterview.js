let twoSum = (nums, target) => {
  //construct a new Map object
  let hashMap = new Map();

  //iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    //declare a variable to store the current element and the current elements counter part
    let currNum = nums[i];
    let counterPart = target - currNum;

    //check if the counter part has already been stored in the hashMap, if so return an array with the current elements index and the value that was stored at the key of the counter part in the hashMap (counter parts index in the nums array)
    if (hashMap.has(counterPart)) {
      let counterPartIndex = hashMap.get(counterPart);
      return [i, counterPartIndex];
    //otherwise add a new key value pair to the hashMap where the key is the current element and the value is the elements index
    } else {
      hashMap.set(currNum, i);
    }
  }
  //if there are no to elements in the input array that add up to the target or the input array is empty return empty array
  return [];
}


(function test() {
  let test1 = twoSum([2,3,18,43,38,1,20], 39);
  console.log(`this test should return [5, 4] and returned [${test1}]`);
  let test2 = twoSum([4,8,9,13,56,78,91,34], 38);
  console.log(`this test should return [7, 0] and returned [${test2}]`);
  let test3 = twoSum([4,8,9,13,56,78,91,34], 101);
  console.log(`this test should return [] and returned [${test3}]`);
  let test4 = twoSum([], 21);
  console.log(`this test should return [] and returned [${test4}]`);
})();