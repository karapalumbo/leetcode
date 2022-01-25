function createPhoneNumber(numbers) {
  let areaCode = "";
  let firstThreeNums = "";
  let lastThreeNums = "";

  let firstThree = numbers.slice(0, 3);
  areaCode += firstThree.join("");

  let secondThree = numbers.slice(3, 6);
  firstThreeNums += secondThree.join("");

  let thirdThree = numbers.slice(6, 11);
  lastThreeNums += thirdThree.join("");

  let phoneNumber =
    "(" + areaCode + ")" + " " + firstThreeNums + "-" + lastThreeNums;
  return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// (123) 456-7890
