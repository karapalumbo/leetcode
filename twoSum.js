let twoSum = function (nums, target) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};

twoSum([1, 2, 3, 4], 4);
// [0,2]
