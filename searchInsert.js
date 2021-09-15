var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return nums.length;
};

let s = searchInsert([1, 2, 3, 5], 6);
console.log(s); // 4
