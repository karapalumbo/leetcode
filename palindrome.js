var isPalindrome = function (x) {
  let str = parseInt(x.toString().split("").reverse().join("").toString());

  if (x === str) {
    return true;
  } else {
    return false;
  }
};
