const book = {
  title: "One piece",
  author: "Oda Ichiro",
  pages: 1995,
  isRead: true,
};

// before update of the book
console.log(`Book title : ${book.title}`);
console.log(`Author of the book : ${book.author}`);
console.log(`Pages of book : ${book["pages"]}`);
console.log(`has been read : ${book["isRead"]}`);

console.log("complete information of the book");
console.log(book);

// updated book
book.genre = "Shonen";

console.log("Updating the book....");
console.log("Book has been updated");
console.log("Updated book");

console.log(book);

// movies array
const movies = [
  {
    title: "Iron man",
    year: 2008,
    director: "Jon favreau",
  },
  {
    title: "Black Panther",
    year: 2018,
    director: "Ryan Coogler",
  },
  {
    title: "Avenger Endgame",
    year: 2019,
    director: "Anthony Russo",
  },
];

console.log("Title : " + movies[1].title);

console.log("before :");
console.log(movies);

// adding one object to array with title property only
movies.push({ title: "Splash" });

// update the year of first object
movies[0].year = 2023;

console.log("after : ");
console.log(movies);

const student = {
  name: "Jeremy Glenn Panlasigui",
  age: 24,
  subjects: ["Web Development", "Data Science", "Java"],
};

console.log("Student Info : ");
console.log(student);

// print the first subjects
console.log("First subject : " + student.subjects[0]);

// add new subject on the array
student.subjects.push("Communication Skills");

console.log("Student Updated Info : ");
console.log(student);

const recipe = {
  name: "Pasta Salad",
  ingredients: [
    { name: "Cherry tomatoes", quantity: "1 cup" },
    { name: "Cucumber", quantity: "1 diced" },
    { name: "Red onion", quantity: "1 small" },
  ],
  isVegetarian: true,
};

console.log(
  "The second recipe of " + recipe.name + " is " + recipe.ingredients[1].name
);

// add ingredients
recipe.ingredients.push({ name: "Corn", quantity: "1 half cup" });

// iterate the whole object
for (let key in recipe) {
  console.log(recipe[key]);
}
