function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      //find sum of 1+5+9
      if (i === j) {
        diag1 += arr[i][j];
      }
      // find sum of 3+5+7
      // if idx0=idx2 (3), idx1=idx1 (5), idx2=idx0 (7)
      if (i === arr.length - j - 1) {
        diag2 += arr[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
