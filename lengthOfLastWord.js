var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  let newArr = arr.filter((e) => e);
  let lastWord = newArr.pop();
  let length = lastWord.length;
  return length;
  // let str = `The last word is '${lastWord}' with length ${length}.`
  // return str;
};

lengthOfLastWord("hello world  there "); // 5
