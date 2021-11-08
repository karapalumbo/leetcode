const checkVowelLength = function (str) {
  let hashArr = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let vowelArr = [];
  let splitStr = str.split(""); // 'p', 'i', 'l', 'l', 'o', 'w'
  let strLength = splitStr.length; // 6
  let half = strLength / 2; // 3

  for (let i = 0; i < strLength; i++) {
    if (splitStr[i] === hashArr[splitStr[i]]) {
      vowelArr.push(hashArr[splitStr[i]]);
    }
  }
  let vowelArrLength = vowelArr.length;

  if (vowelArrLength >= half) {
    return true;
  } else {
    return false;
  }
};

console.log(checkVowelLength("pillow")); // false

// find the vowels in a string
// if the string has more than 50% vowels, return true
// else return false.
