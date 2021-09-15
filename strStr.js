var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (haystack === "") return -1;

  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

let s = strStr("hello", "");
console.log(s);
