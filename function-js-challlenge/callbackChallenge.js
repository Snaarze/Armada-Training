function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
// calculates for subtraction, a function that take two parameters to subtract two values and return it's value
function subtraction(a, b) {
  return a - b;
}
// calculates for division, a function that take two parameters to divide two values and return it's value
function division(a, b) {
  return a / b;
}

console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(4, 2, multiply)); // Output: 8
console.log(calculate(20, 8, subtraction)); // Output: 8
console.log(calculate(144, 12, division)); // Output: 8

function delayedMessage(message, delay, callback, startCallback) {
  startCallback();
  setTimeout(() => {
    callback(message);
  }, delay);
}

delayedMessage(
  "Hello, world!",
  2000,
  function (msg) {
    console.log(msg);
  },
  start
);

function start() {
  console.log("Started....");
}

document.getElementById(".clickMe").addEventListener("click", function () {
  alert("Button clicked!");
});

document.getElementById(".secondBtn").addEventListener("click", function () {
  console.log("Button clicked!");
});

function repeatTask(times, callback) {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
}

repeatTask(100, function (index) {
  if (index > 10) {
    return false;
  }
  console.log("Iteration:", index);
});
