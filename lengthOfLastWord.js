var lengthOfLastWord = function (s) {
  let arr = s.split(" "); // ["hello", "how", "you", "", ""]

  for (let i = arr.length - 1; i >= 0; i--) { // loop backwards 
    if (arr[i].length >= 1) { // if length of last word >= 1
      return arr[i].length; // return the length 
    }
  }
};

let str = lengthOfLastWord("hello how you  ");
console.log(str); // 3
