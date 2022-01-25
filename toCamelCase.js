function toCamelCase(str) {
  let splitStr = str.split(" ").map(function (word, index) {
    if (index === 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return splitStr.join("");
}

console.log(toCamelCase("Hello there world"));
// helloThereWorld
