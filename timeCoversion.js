function timeConversion(s) {
  let arr = s.slice(0, 8).split(":");
  // arr = ["1", "00", "00 "]

  arr[0] =
    s.indexOf("PM") > -1 // PM is at index of 8, which means PM is there
      ? arr[0] === 12
        ? "12"
        : Number(arr[0]) + 12 // add 12 to the number
      : arr[0] === 12
      ? "00"
      : arr[0];

  return arr.join(":");
}

console.log(timeConversion("1:00:00 AM"));
