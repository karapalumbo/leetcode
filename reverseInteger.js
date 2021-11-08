var reverse = function (x) {
  let str = x.toString(); // convert to a string  // '123'
  let splitStr = str.split(""); // split the string '1','2','3'
  let reverseStr = splitStr.reverse(); // reverse the string '3','2','1'
  let joinStr = reverseStr.join(""); // join string back

  let num = parseInt(joinStr); // change string back to number
  let ans = num;

  if (x < 0) {
    // if negative (negative nums are less than 0)
    ans *= -1; // multiply the number by -1 so it returns the negative sign
  }

  // if (ans < Math.pow(2, 31) * -1 || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};
