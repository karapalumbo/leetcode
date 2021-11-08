var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = stack[stack.length - 1]; // last character in string 

    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else if (
      (char === "{" && s[i] === "}") ||
      (char === "[" && s[i] === "]") ||
      (char === "(" && s[i] === ")")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0 ? true : false; // if nothing in the stack, return true, else false 
};
console.log(isValid("{[]"));
