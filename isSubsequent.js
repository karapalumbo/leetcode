// DRAW THIS OUT 

function isSubsequence(str1, str2) {
  // he | hello
  let str1Index = 0;
  let str2Index = 0;

  if (!str1) return true; // if no string 1, return true. 

  while (str2Index < str2.length) { // while index < length of its string
    if (str2[str2Index] === str1[str1Index]) { // check first chars and see if they match 
      str1Index += 1; // add 1 to str 1 index. Now char = e ALSO ADD 1 TO STR2 if this occurs 
    } 
      if (str1Index === str1.length) {
          return true; // if the str1 index = the length of it, there are no more characters 
      }
    str2Index += 1; // THIS ALWAYS RUNS EVEN IF THE FIRST IF STATEMENT FAILS 
  }
  return false;
}

isSubsequence("he", "hello")
