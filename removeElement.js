var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
         if(nums[i] === val) {
            nums.splice(i, 1); // at index i, remove 1 item 
            i--;
        }
    }
    return nums
};


removeElement([1, 2, 3, 4], 3)
// [1, 2, 4]