// Inventory Tracker
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];
// the output here will start from apple with 10 quantity of  items until it will reach the end of array which is elderberry with the quantity of 7
// the reason why it will log all the items here is because of the for loop which let us iterate the array until the condition is met
for (let i = 0; i < inventory.length; i++) {
  console.log(`${inventory[i]}: ${inventoryCount[i]}`);
}
//sorting alphabetically
let words = ["zebra", "apple", "mango", "cherry", "banana"];

for (let i = 0; i < words.length; i++) {
  // default value of j is 1
  for (let j = i + 1; j < words.length; j++) {
    // checks if current i is greater than j of words
    // on the first run of loop, the words[i] was once replaced only,while the 2nd iteration  of
    // the inner loop made a lot of changes of words[i] since it was compared a lot to sort it alphabetically.
    // and so on.
    if (words[i] > words[j]) {
      // if the current i greater than current j store the current i to variable called temp
      let temp = words[i];
      //  replaced the value of zebra to apple since apple is less than zebra, the loop will run until we met the condition of j
      // is greater than words.length, what i meant here is outside the if statement.
      words[i] = words[j];
      //   the current value of words[j] is zebra, no it will loop again
      words[j] = temp;
    }
  }
}

// so the output here is apple , banana, cherry, mango, zebra
console.log(words);

// Unique Array Builder
// what basically happen here is that first we push a value inside the unique number since there is not value to compare of and would not get in to the for loop condition.
// now since the first we have value inside the array, we now have a value to compare on with the current randomNumber generated from while loop. now it will check if current value of -
// randomNumber is matched within the array and if something matched within the array the for loop will stop with the break method and would not add anything to the array. the loop will keep -
// running until the uniqueNumber array is not greater than 10.
let uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
  // generate random number from 0 - 20,
  let randomNumber = Math.floor(Math.random() * 20) + 1;

  // Check if the randomNumber already exists in the array
  let exists = false;
  for (let i = 0; i < uniqueNumbers.length; i++) {
    if (uniqueNumbers[i] === randomNumber) {
      exists = true;
      break;
    }
  }

  // If it doesn't exist, add it to the array
  if (!exists) {
    uniqueNumbers.push(randomNumber);
  }
}
// the output here is always different set of numbers depending on the generated of numbers by Math.random(). is also to ensure that the array does not have any duplicate numbers
// additionally the numbers were round up/down with the Math.Floor Built in methods by js.
console.log(uniqueNumbers);

// triangle Checker
// three varriables
let sideA = 7;
let sideB = 10;
let sideC = 5;

// first condition is true, 17 > 10, true 15 > 7, true 12 > 10
if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
  console.log(
    `The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`
  );
} else {
  console.log(
    `The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`
  );
}
// the output here is it form a valid triangle upon checking the condition which all met true and led me to answer it as a valid triangle
