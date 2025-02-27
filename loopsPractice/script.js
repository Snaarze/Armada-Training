// return the msg as console log for readability
function message(msg) {
  return console.log(msg);
}

// multiplication table
let number = 5;

for (let i = 1; i <= 10; i++) {
  message(`${number} x ${i} = ${number * i}`);
}

// sum of first N Natural Number
let n = 5;
let sum = 0;
for (let j = 1; j <= n; j++) {
  sum += j;
}

message(`The sum of the first 5 numbers is : ${sum}`);

// array elements printer
const intArray = [2, 4, 6, 8, 10];

for (let i = 0; i < intArray.length; i++) {
  message(`Array element: ${intArray[i]}`);
}

// pattern printer
for (let i = 0; i < 5; i++) {
  // stores the stars
  let stars = "";

  for (let j = 0; j <= i; j++) {
    stars += "*";
    // can use if statement to only see the final output
  }
  message(stars);
}

// reverse Array Element
let normalArray = [1, 3, 5, 7, 9];

for (let i = normalArray.length - 1; i >= 0; i--) {
  message(`Reversed Element : ${normalArray[i]}`);
}
