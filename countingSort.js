const countingSort = (arr) => {
  let min = 0;
  let max = 99;

  const count = {};

  for (let i = min; i <= max; i++) {
    count[i] = 0; // create an object with key / value pairs.
    // {0:0, 1:0, 2:0, 3:0...}
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1; // loop over array and increment values by 1 each time # occurs
  }

  return Object.values(count); // turn object's values into array
};

console.log(countingSort([1, 2, 3, 2]));
// [0, 1, 2, 0, 0, 0, 0, 0...]
//  no 0's, one 1, two 2's, no 3's...

// Create an integer array whose index range covers the entire range of values
// in your array to sort. Each time a value occurs in the original array, you
// increment the counter at that index. At the end, run through your counting array,
// printing the value of each non - zero valued index that number of times.
