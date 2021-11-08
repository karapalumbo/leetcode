
// DRAW OUT MATRIX AND INDICES
function diagonalDifference(arr) { 
  let diag1 = 0; 
  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) { 
      if (i === j) { 
        diag1 += arr[i][j];
      }
      if (i + j === arr.length - 1) { // this always === the arr.length - 1
        diag2 += arr[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
  // return absolute different of the 2 diags 
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
