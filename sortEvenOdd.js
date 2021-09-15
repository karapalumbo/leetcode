const nums = [2, 5, 2, 6, 7, 1, 8, 9];

const evenOdd = (arr) => {
  const even = [];
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return even.concat(odd);
};

evenOdd(nums);
console.log(evenOdd(nums));
