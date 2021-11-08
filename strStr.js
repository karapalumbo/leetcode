var strStr = function (haystack, needle) {
  if (haystack === "") return -1; // return -1 if no string
  if (needle === "") return 0; // return 0 if no substring
 
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

let s = strStr("hello", "ll");
console.log(s); // 2
