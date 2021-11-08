var singleNumber = function (nums) {
  let unique = nums.filter(function (num) {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      return Number.isFinite(num);
      // filter returns only truthy values and 0 is a falsy value
      // use Number.isFinite to use all number values, even 0
    }
  });
  return unique[0];
};

console.log(singleNumber([1, 0, 1])); // 0

// Given a non-empty array of integers nums, every element appears twice except for one.

// Find that single one.
