var reverse = function (x) {
  // convert x to a string  // '123'
  // split the string '1','2','3'
  // reverse the string '3','2','1'
  // change string back to number
  let ans = parseInt(x.toString().split("").reverse().join("").toString());

  // if 123 < 0
  if (x < 0) {
    // then... 321 = 321 * -1 (answer doesn't include the -)
    ans *= -1;
  }

  // if 321 < 2^32 * -1 OR 321 > 2^31 - 1, return 0
  if (ans < Math.pow(2, 31) * -1 || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};
