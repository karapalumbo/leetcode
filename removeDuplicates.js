var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return;
  }
  let i = 0;
  let j = 1;

  while (j <= nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
      j++;
    } else {
      j++;
    }
  }
  return i + 1;
};

removeDuplicates([1, 1, 2, 3, 4]);
