var firstUniqChar = function (s) {
  let arr = s.split("");

  const unique = arr.filter(function (val) {
    if (arr.indexOf(val) === arr.lastIndexOf(val)) {
      return val; // ["l", "t", "c", "o", "d", "e"]
    }
  });
  if (unique.length === 0) { // if unique is empty, that means no values in string are unique
    return -1;
  }
  return arr.indexOf(unique[0]); // return the index
};

console.log(firstUniqChar("leetcode")); // 0


// Given a string s, find the first non-repeating character in it
// and return its index. 
// If it does not exist, return -1.