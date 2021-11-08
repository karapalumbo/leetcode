function findMost(arr) {
  let vals = {};

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    vals[el];

    if (!vals[el]) {
      vals[el] = 1;
    } else {
      vals[el] += 1;
    }
  }

  let maxCount = 0;
  let key;

  for (let item in vals) {
    let count = vals[item];

    if (count > maxCount) {
      maxCount = count;
      key = item;
    }
  }
  return key;
}

console.log(findMost([1, 1, 2, 2, 3, 1])); // 1
