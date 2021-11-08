var longestCommonPrefix = function (str) {
  let prefix = ""; // what word begins with
  let j = 0;

  while (j < str[0].length) {
    // while the first index has a length
    let currChar = str[0][j]; // save the first char of the first element

    for (let i = 1; i < str.length; i++) {
      // loop over second element
      if (str[i][j] !== currChar) {
        // if the second element's first char !== the current
        return prefix; // return the prefix
      }
    }
    prefix += currChar; // else, add the char to the prefix
    j++; // incremement j for next char
  }
  return prefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);
// fl
