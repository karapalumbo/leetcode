
function timeConversion(s) {
  let militaryTime = 0;
  let militaryHour = 0;

  let timeFormatPm = {
    "01": 13,
    "02": 14,
    "03": 15,
    "04": 16,
    "05": 17,
    "06": 18,
    "07": 19,
    "08": 20,
    "09": 21,
    "10": 22,
    "11": 23,
    "12": 12
  };

  let timeFormatAm = {
    "12": "00"
  };

  if ("PM" === s.substring(s.length - 2)) {
    militaryHour = timeFormatPm[s.substring(0, 2)];
  } else if ("AM" === s.substring(s.length - 2) && "12" === s.substring(0, 2)) {
    militaryHour = timeFormatAm[s.substring(0, 2)];
  } else {
    militaryHour = s.substring(0, 2);
  }
  militaryTime = militaryHour + s.substring(2, s.length - 2);
  // time = hour + rest of string
  return militaryTime;
}

let t = timeConversion("12:00:00AM");
console.log(t);
