var merge = function (nums1, m, nums2, n) { 
  while (n) {  
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[--m];
    } else {
      nums1[m + n - 1] = nums2[--n];
    }
  }
  return nums1;
};

merge([1, 2, 3], 3, [2, 3, 4], 3);

// 3 > 4 ? No --> 3+3-1=5(index) = 4(value)
// 3 > 3 ? No --> 3+2-1=4(index) = 3(value)
// 3 > 2 ? Yes --> 3+1-1=3 = 3(index) = 3(value) --> 2 and 3 swap



// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in each array

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be
// stored inside the array nums1.

// To accommodate this, nums1 has a length of m + n, where the first m elements 
// denote the elements that should be merged, and the last n elements are set to 0 
// and should be ignored. nums2 has a length of n.
