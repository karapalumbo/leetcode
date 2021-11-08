function lonelyinteger(arr) {
  let unique = arr.filter(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val); // [5]
  });
  return unique[0];
}

let d = lonelyinteger([1, 2, 3, 3, 2, 1, 5]);
console.log(d); // 5
