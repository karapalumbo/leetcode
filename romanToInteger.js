const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let nums = 0;
  let splitArr = s.split("");

  for (let i = 0; i < splitArr.length; i++) {
    let currentVal = romanNumerals[splitArr[i]]; // 1
    let nextVal = romanNumerals[splitArr[i + 1]]; // 10
    if (currentVal < nextVal) {
      // If 1 < 10
      nums += nextVal - currentVal; // 10-1 = nums
      i++; // increment index to go to next element
    } else {
      nums += currentVal; // else nums is the current val
    }
  }
  return nums;
}

romanToInt("IX"); // 9
