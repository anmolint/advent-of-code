const fs = require("fs");

// Specify the path to your text file
const filePath = "./input.txt";
// Define number words
const numberWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function sumCalibrationValues(document) {
  let p1 = 0;
  let p2 = 0;
  for (let line of document) {
    let p1_digits = [];
    let p2_digits = [];

    for (let i = 0; i < line.length; i++) {
      let c = line[i];

      if (!isNaN(c)) {
        p1_digits.push(c);
        p2_digits.push(c);
      }

      let values = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      for (let d = 0; d < values.length; d++) {
        let val = values[d];
        if (line.startsWith(val, i)) {
          p2_digits.push((d + 1).toString());
        }
      }
    }

    p1 += parseInt(p1_digits[0] + p1_digits[p1_digits.length - 1], 10);
    p2 += parseInt(p2_digits[0] + p2_digits[p2_digits.length - 1], 10);
  }
  return { p1, p2 };
}

// Example usage

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const dataArray = data.split("\n");

  const { p1, p2 } = sumCalibrationValues(dataArray);
  console.log("Calibration Value:", p1, "R@", p2);
});
