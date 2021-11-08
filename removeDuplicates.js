var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // at index i + 1, remove 1 item
      removeDuplicates(nums); // call function until there are no more nums left
    }
  }
  return nums;
};
