const plusMinus = (arr) => {
  let positiveSum = 0;
  let negativeSum= 0;
  let zeroes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes++;
    } else if (arr[i] >= 1) {
      positiveSum++;
    } else if (arr[i] < 0) {
      negSum++;
    }
  }

  negativeSum /= arr.length;
  positiveSum /= arr.length;
  zeroes /= arr.length;
    
  console.log(positiveSum);
  console.log(negativeSum);
  console.log(zeroes);
};
plusMinus([1, 1, 0, -1, -1]);
// 0.400000
// 0.400000
// 0.200000