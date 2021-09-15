var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  let newArr = arr.filter((e) => e);
  let lastWord = newArr.pop();
  let length = lastWord.length;
  return length;
};

lengthOfLastWord("hello world  there "); // 5

// ---------------------------------

var lengthOfLastWord = function (s) {
  let arr = s.split(" ");

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length >= 1) {
      return arr[i].length;
    }
  }
};

let str = lengthOfLastWord("hello you");
console.log(str); // 3
