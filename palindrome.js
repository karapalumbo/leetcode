var isPalindrome = function (x) {
  let str = x.split("").reverse().join("");

  if (x === str) {
    return true;
  } else {
    return false;
  }
};
