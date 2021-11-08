
function findRange(arr) {

  if (arr.length === 1) {
    return arr;
  }

  let newArr = [];
  let previous = arr[0]; // [0,1]

  for (let i = 1; i < arr.length; i++) {
    let start = arr[i][0]; // 1 & 4
    let end = arr[i][1]; // 3 & 7

    if (start === previous[1]) { // if 1 === 1
      previous = [previous[0], end]; // previous = [0, 3]
    } else { // if start !== previous[1]
        newArr.push(previous); // push previous to new array
      previous = arr[i]; // previous now === the next array val
    }
  }
  newArr.push(previous);
  return newArr;
}

findRange([
  [0, 1],
  [1, 3],
  [4, 7]
]);
// [[0,3], [4,7]]