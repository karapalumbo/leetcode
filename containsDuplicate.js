var containsDuplicate = function (nums) {
  let dups = nums.filter(function (val) { // filter creates an array
    return nums.indexOf(val) !== nums.lastIndexOf(val);
  });
  if (dups.length > 0) {
    return true;
  } else {
    return false;
  }
};

console.log(containsDuplicate([1, 2, 3, 1]));
// true ([1,1])



// Given an integer array nums, return true if any value
// appears at least twice in the array, and return false
// if every element is distinct.


// --------------------------------

var containsDuplicate = function (nums) {
  let sorted = nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sorted.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(containsDuplicate([1, 2, 3]));