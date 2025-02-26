function customFilter(arr, callback) {
  let filteredArray = [];
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

function isEven(num) {
  return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4, 6]

function countdown(start, callback) {
  // Your code here
  for (let i = start; i >= 0; i--) {
    // log the callback with the delay of 1 each count is printed
    setTimeout(() => callback(start - i), i * 1000);
  }
}

function displayNumber(num) {
  console.log(num);
}

countdown(5, displayNumber); // Output: 5 4 3 2 1 0 (with 1-second delay between each)

function runTasks(tasks) {
  // iterates through all the task in the array
  tasks.forEach((element, index) => {
    // print task with 1  seconds delay
    setTimeout(() => element(), index * 1000);
  });
}

// logs the task
function task1() {
  console.log("Task 1 completed");
}

function task2() {
  console.log("Task 2 completed");
}

function task3() {
  console.log("Task 3 completed");
}
// call the function
runTasks([task1, task2, task3]);

function createButton(buttonText, callback) {
  // Your code here
  //   create new element of button
  const btn = document.createElement("button");
  //   select the parent element
  const body = document.querySelector("body");
  //   append button to body
  body.appendChild(btn);
  //   assign content of button
  btn.textContent = buttonText;

  // attach listener to the button created
  btn.addEventListener("click", callback);
}

function buttonClicked() {
  // console.log changed to alert
  alert("Button Clicked!");
}

createButton("Click Me", buttonClicked);

function askQuestion(question, choices, correctAnswer, callback) {
  // Your code here
  //  log the question
  console.log(question);
  // log the choices with delay of 1 second
  setTimeout(() => console.log("Choices : " + choices), 1000);
  //   log the answer with delay of 2 seconds
  setTimeout(() => console.log("user picked " + choices[3]), 2000);
  // checks if the choices matches the correct answer
  setTimeout(() => callback(choices[3] === correctAnswer), 3000);
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
