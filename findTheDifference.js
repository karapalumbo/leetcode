var findTheDifference = function (s, t) {
  let sArr = s.split("");
  let tArr = t.split("");

  let sortS = sArr.sort();
  let sortT = tArr.sort();

  let sString = sortS.join("");
  let tString = sortT.join("");

  const unique = sortT.filter(function (val, i) {
    if (tString.charAt(i) !== sString.charAt(i)) {
      return val;
    }
  });
  return unique[0];
};

console.log(findTheDifference("abc", "bcad")); // d

// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.
