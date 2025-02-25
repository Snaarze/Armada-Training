// return the message, for readability
function message(msg) {
  return console.log(msg);
}

let score = 60;

// checks the score and log the grade accordingly
if (score >= 90 && score <= 100) {
  message("Grade A");
} else if (score >= 80) {
  message("Grade B");
} else if (score >= 70) {
  message("Grade C");
} else if (score >= 60) {
  message("Grade D");
} else {
  message("Grade F");
}

let temperature = "35";
// checks the temp
if (temperature > 30) {
  message("It's hot outside, Stay Hydrated!");
} else if (temperature > 15) {
  message("The Weather is nice, Enjoy your day!");
} else if (temperature >= 0) {
  message("Its cold outside! Wear jacket.!");
} else {
  message("Its freezing outside! Bundle up!");
}

let age = 13;
let isMember = false;

// eligibility Checker
if (age >= 18) {
  message("You are eligible for this activity.");
} else if (age >= 13) {
  message("You need parental permission.");
} else {
  message("You are too young for this activity");
}

// ticker price calculator
if (age < 12) {
  message("The ticker is free");
} else if (age >= 12 && isMember) {
  message("The ticket cose is $10");
} else {
  message("The ticket cost is $15");
}

function isLeapYear(year) {
  return console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2004);
isLeapYear(1904);
