function staircase(n) {
  let output = "";

  // outer for loop to keep track of the overall number of rows (n)
  for (let i = 1; i <= n; i++) {
    // inner for loop to keep track of the preceding spaces on each line
    // s should start out at n-1 which we can see from the pic I drew
    // s should be greater than or equal to i because the number of spaces decreases as i increases
    // decrease s bc the number of spaces decreases as i increases
    for (let s = n - 1; s >= i; s--) {
      output += " ";
    }

    // inner for loop to keep track of the #s on each line
    // h should start at one because the first line will always have one #
    // h should be less than or equal to the row that we are on since h will approach and eventually equal n
    // h increases since we increment h to equal i which will eventually equal n
    for (let h = 1; h <= i; h++) {
      output += "#";
    }
    // new line
    output += "\n";
  }
  // log the final result
  console.log(output);
}

staircase(3);
