// ps. node was used here to check the logs of the output, that's why i did not use the index to check the output on the browser. Thank you for your understanding

// create three variables and store a value
let item1 = 34;
let item2 = 40;
let item3 = 100;
let totalCost = item1 + item2 + item3;

// log the output
console.log(`The total cost of the item is : $${totalCost}`);

// store three variables
let num1 = 15;
let num2 = 3;
let num3 = 7;

// log the output
console.log("The average is : " + (num1 + num2 + num3) / 3);

// store a number
let num = 15;

// console the number and checks if it is odd or even
console.log(num % 2 === 0 ? num + " is even number" : num + " is odd number");

let normalPrice = 100;
let discount = 20;

// calculate the discounted price
let discountedPrice = normalPrice - (normalPrice * discount) / 100;
let originalPrice = discountedPrice / (1 - discount / 100);

// logs the prices
console.log(`The discounted price is : $${discountedPrice}`);
console.log(`The original price before the discount was : $${originalPrice}`);
