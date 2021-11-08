function countZeros(arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      let x = arr[i];
      let y = arr[j];
      let first = Math.pow(10, x);
      let second = Math.pow(first, y);
      j++;
      ans.push(second);
    }
  }
    
  let joined = ans.join("");
  let splitStr = joined.split("");

  let filterZeros = splitStr.filter((item) => {
    return item !== "1";
  });

  return filterZeros.length;
}

console.log(countZeros([1, 2, 3])); // 12 