function averagePair(arr, target) {
    let left = 0; // beginning of array 
    let right = arr.length - 1; // end of array
    
  while (left < right) { // while left pointer doesn't overlap right pointer
    let average = (arr[left] + arr[right]) / 2; 
    if (average === target) { 
      return true;
    } else if ( 
      average < target 
    ) {
      left++; // move pointer to the right 
    } else {
      right--; // move pointer to the left 
    }
  }
  return false; // if no averages match target, return false 
}

averagePair([1,2,3,4], 2) // true