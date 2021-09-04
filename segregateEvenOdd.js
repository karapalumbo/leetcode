function segregateEvenOdd(arr) {
  /* Initialize left and right indexes */
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    /* Increment left index while we see 0 at left */
    while (arr[left] % 2 == 0 && left < right) {
      left++;
    }

    /* Decrement right index while we see 1 at right */
    while (arr[right] % 2 == 1 && left < right) {
      right--;
    }

    if (left < right) {
      /* Swap arr[left] and arr[right]*/
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
}

let arr = [12, 34, 45, 9, 8, 90, 3];

segregateEvenOdd(arr);

// 12 34 90 8 9 45 3
