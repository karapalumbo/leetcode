function staircase(n) {
  let output = "";

  // keep track of overall number of rows (n)
  for (let i = 1; i <= n; i++) {
    // Keep track of the preceding spaces on each line
    // s should start out at n-1
    // s should be greater than or equal to i because the number of spaces decreases as i increases
    for (let s = n - 1; s >= i; s--) {
      output += " ";
    }

    // Keep track of the '#' on each line
    // h should start at 1 because the first line will always have 1 '#'
    // h should be less than or equal to the row that we are on since h will approach and eventually equal n
    for (let h = 1; h <= i; h++) {
      output += "#";
    }
    // new line
    output += "\n";
  }
  console.log(output);
}

staircase(3);

// row 1 //   #
// row 2 //  ##
// row 3 // ###
