// function declaration
function generatePattern() {
  // value holder
  let result = "";
  //   outer loop will run three times
  for (let i = 1; i <= 3; i++) {
    // inner loop wil run around 6 times as outer loop run 3 times
    // first inner loop run output will be 1,
    // second inner loop output will be 1 2 as the i value changed as the outer loop and inner loop is at 2nd iteration
    // third inner loop output will be 1 2 3 as the i value changed again so it will run as three times as the outer loop is at 3rd iteration
    // each time the inner loop is finished the result value will be reset to  empty string with space inside it " "
    for (let j = 1; j <= i; j++) {
      result += j + " ";
    }
    // after the inner loop is finished running, redeclare the result value as  "/n" or space
    result += "\n";
  }
  //   return the result
  return result;
}
// final output
// 1
// 1 2
// 1 2 3
console.log(generatePattern());

// function declaration
function swapFirstLast(arr) {
  // remove the first element of the array and store it or return
  //   current value  of arr = [20, 30, 40]
  let first = arr.shift();
  //   same with shift this method remove the last element and store/return the value removed from the array
  // current value of arr = [20, 30 ]
  let last = arr.pop();
  //   add the value on the first array index which were removed before using the pop method
  //   current value arr =[40, 20 ,30 ]
  arr.unshift(last);
  //   add the value on the  last array index which were removed before using the pop method
  //   current value arr =[40, 20 ,30, 10]
  arr.push(first);

  //   return the modified arr
  return arr;
}

let numbers = [10, 20, 30, 40];

// output will be the same as it was modified by the array itself
// [40, 20, 30 ,10]
console.log(swapFirstLast(numbers));
console.log(numbers);

function filterPassingGrades(grades) {
  let passing = [];
  //   iterate the array of grades
  for (let grade of grades) {
    // checks if the grades value is greater than or equal to 70
    if (grade >= 70) {
      // add the element at the end of the array
      passing.push(grade);
    } else {
      //   add the element at the start of the array
      passing.unshift(grade);
    }
  }
  //   return the value of the passing array
  return passing;
}

let scores = [85, 45, 90, 60];

// first output [85]
// second output [45,85] as the grade is lower than the condition so it was added at the start of the array
// third output greater than the condition so the output will be [45, 85, 90] as it was added at the end of the array
// last iteration is added to the start of the array  as it was lower than the condition.
// output will be [60,45,85,90]
console.log(filterPassingGrades(scores));

// function declaration
function updateStatus(tasks) {
  for (let task of tasks) {
    // replaced as the opposite value
    task.completed = !task.completed;
  }
  //   return the task
  return tasks;
}

let taskList = [
  { id: 1, completed: false },
  { id: 2, completed: true },
];

// both of the output wil lbe taskList = [{id : 1, completed : true}, {id : 2, completed : false}] as it was modified directly of the array
console.log(updateStatus(taskList));
console.log(taskList);

// function declaration
function findValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // the array iterates until the end of the array or found a target
    // check if any of the value is matched to the target value
    if (arr[i] === target) {
      // end the loop if matched
      return `Found at index ${i}`;
    }
  }
  return "Not found";
}

let data = [5, 12, 8, 130, 44];
// found at index 1
console.log(findValue(data, 12));
// not found
console.log(findValue(data, 100));
