function reverseWord(word) {
  if (typeof word !== "string") {
    return "Please enter a word!";
  }

  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

function reverseString(string) {
  let splitString = string.split(" ");
  let arr = [];

  splitString.forEach((word) => {
    let reverse = reverseWord(word);
    arr.push(reverse);
  });

  return arr.join(" ");
}

let a = reverseString("hello world");
console.log(a); // olleh dlrow