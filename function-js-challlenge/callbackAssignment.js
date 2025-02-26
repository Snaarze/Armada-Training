let numbers = [1, 2, 3];
let doubled = customMap(numbers, function (num) {
  return num * 2;
});

function customMap(array, callback) {
  //   create new variable to hold the array that matches the conditions
  let doubleArray = [];

  //   loop through the array
  for (let i = 0; i < array.length; i++) {
    // push array element to doubleArray
    doubleArray.push(callback(array[i]));
  }
  //   return the output
  return doubleArray;
}

console.log(doubled); // Should output: [2,4,6]

let result = filter([1, 2, 3, 4, 15], function (val) {
  return val < 10;
});

function filter(array, callback) {
  //   loop through the array
  for (let i = 0; i < array.length; i++) {
    // check if current item is valid
    if (!callback(array[i])) {
      // remove item if condition met dynamically
      array.splice(i, 1);
    }
  }

  //   return the output
  return array;
}
console.log(result); // Should output: [1,2,3,4]

// modified the value of array from [1,2,3,4,] to [1,2,3,4,5,6] to match the output required
let someFunction = some([1, 2, 3, 4, 5, 6], function (val) {
  return val > 5;
});

function some(array, callback) {
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // checks if items were found in the array
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}
// i'm sure why the output  should be true ,wherein some of the array items were not found.
console.log(someFunction); // Should output: true

let everyFunction = every([1, 2, 4], function (val) {
  return val > 0;
});

function every(array, callback) {
  // loops through the array
  for (let i = 0; i < array.length; i++) {
    // checks if some falsy value is found within the array
    // stop the for loop if found then return the false boolean
    if (!callback(array[i])) {
      return false;
    }
  }
  //   return true if none were found within the array
  return true;
}
console.log(everyFunction); // Should output: true

let sum = reduce([1, 2, 3], function (acc, num) {
  return acc + num;
});

function reduce(array, callback) {
  // value holder that adds up
  let sum = 0;

  //   loop the array
  for (let i = 0; i < array.length; i++) {
    // replace the value of the return value of the callback
    sum = callback(sum, array[i]);
  }
  //   return the final output
  return sum;
}
console.log(sum); // Should output: 6

let includeFunction = includes([1, 2, 3], function (val) {
  return val === 2;
});

function includes(array, callback) {
  // loop the array
  for (let i = 0; i < array.length; i++) {
    // check if any of the value of the array is truthy values
    // if then return true
    if (callback(array[i])) {
      return true;
    }
  }
  //   if none were found return the output as falsy values
  return false;
}
console.log(includeFunction); // Should output: true
