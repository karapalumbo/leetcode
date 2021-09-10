function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

const fizzBuzz = function (n) {
  let answer = new Array(n); // turns number into array

  for (let i = 1; i <= n; i++) {
    // loop over array
    if (i % 3 === 0 && i % 5 === 0) {
      answer[i - 1] = "FizzBuzz";
    } else if (i % 3 === 0) {
      answer[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
      answer[i - 1] = "Buzz";
    } else {
      answer[i - 1] = i.toString(); // change all vals back to string
    }
  }
  return answer;
};

fizzBuzz(3); // ["1","2","Fizz"]
