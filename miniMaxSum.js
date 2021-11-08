function minMax(array) {
  let min = array[0];
  let max = array[0];
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum += array[i];

    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(sum - max, sum - min);
}

// 1+2+3+4 = 10 min
// 2+3+4+5 = 14 max

minMax([1, 2, 3, 4, 5]);
// 10 14



// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four integers.
// Then print the minimum and maximum values as a single
// line of two space - separated integers.


