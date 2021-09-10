const checkVowelLength = function (str) {
  let hashArr = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let vowelArr = [];
  let splitStr = str.split("");
  let strLength = splitStr.length;
  let half = strLength / 2;

  for (let i = 0; i < splitStr.length; i++) {
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

console.log(checkVowelLength("candy"));
