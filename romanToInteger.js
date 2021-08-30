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
    let currentVal = romanNumerals[splitArr[i]]; // I = 1
    let nextVal = romanNumerals[splitArr[i + 1]]; // X = 10
    if (currentVal < nextVal) {
      // If 1 < 10
      // add 10 to nums
      nums += nextVal - currentVal; // subtract the values
      i++; // break out of loop??
    } else {
      nums += currentVal; // else add the values
    }
  }
  return nums;
}

romanToInt("IX"); // 9
