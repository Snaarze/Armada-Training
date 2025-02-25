//function declaration
function calculateSum(arr) {
  // initial value, sum is accessible outside of the for loop block scope because of the lexical scope.
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // addition assignment
    sum += arr[i];
  }
  //   return the sum of the value added from the for loop
  return sum;
}
// used as arguments
let numbers = [1, 2, 3, 4];

// the output of this function is 10 as addition assignment were used here inside the function
// here's how it work, currently there are four element or list inside the array if were plus all of them the sum will be 10
// first iteration of for loop will be 0 + 1 = 1;
// 2nd iteration will be 1 + 2 = 3;
// 3rd iteration will be 3 + 3 = 6;
// last iteration will be 6 + 4  = 10;
console.log("Sum:", calculateSum(numbers));

// function declaration
function isEven(num) {
  // checks if the value  has remainder of 0 when divided by 2
  if (num % 2 === 0) {
    return true;
    // we can improve the code by remove else  statement then just use return false
    // another approach can be used here is return num % 2 === 0
    // as it act as condition and converted as boolean which will return false or true.
  } else {
    return false;
  }
}

// output here will be true as it has no remainder left
console.log(isEven(4));
console.log(isEven(0));

// false there is remainder of 1
console.log(isEven(7));

// function declaration
function greet(name) {
  return "Hello, " + name + "!";
}
// function declaration
function personalizedGreeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
  }
}

let friends = ["Alice", "Bob", "Charlie"];
// here the result here will log three times as the array has three elements/list and were used as arguments on the function called personalizedGreeting
// while the values of the array were used greet function as arguments, the array were accessible due to the for loop.
// output Hello Alice, Hello Bob, Hello Charlie. the output will be line by line
personalizedGreeting(friends);

function reverseArray(arr) {
  // act as container of the values to be stored later
  let reversed = [];
  // the i value her will start at 2 as 3 -1.
  for (let i = arr.length - 1; i >= 0; i--) {
    // add values to the reversed array
    // inside the for loop i decrement every loop happen
    // as this helps to access the array as reverse
    reversed.push(arr[i]);
  }

  //   return the new value of reversed array
  return reversed;
}

// used as arguments
let originalArray = [10, 20, 30];

// the output here will be opposite as it was reversed during function invoked
// 30, 20 , 10
console.log(reverseArray(originalArray));
// nothing changed still the 10, 20, 30 as it was just referencing directly the array.
console.log(originalArray);

// function declaration
function multiplyMatrix(matrix) {
  // outer loop
  // used the inner array to define the length of the array
  //   stop the loop when it reach the or  if it is not greater than 2
  // meaning the loop will run twice both of them
  for (let i = 0; i < matrix.length; i++) {
    // here is the inner array
    for (let j = 0; j < matrix[i].length; j++) {
      // first loop output 1 * 2 = 2
      // 2 * 2 = 4
      // second loop  3 * 2 = 6
      // 4 * 2 = 8
      // the reason run twice because it is living inside a for loop! meaning nested loop,
      // a nested loop works like a inner loop needed to be done first before running the outside loop again

      matrix[i][j] *= 2;
    }
  }
  //   return the updated value
  return matrix;
}

let matrix = [
  [1, 2],
  [3, 4],
];

// output will be [[2,4],[ 6,8]]
console.log(multiplyMatrix(matrix));
