// A pangram is a sentence that contains every
// single letter of the alphabet at least once.

function isPangram(string) {
  let lowercase = string.toLowerCase().split(" ").join("");
  // lowercase = thequickbrownfoxjumpsoverthelazydog

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// true
