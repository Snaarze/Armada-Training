function message(msg) {
  return console.log(msg);
}

const book = {
  title: "One piece",
  author: "Oda Ichiro",
  pages: 1995,
  isRead: true,
};

// before update of the book
message(`Book title : ${book.title}`);
message(`Author of the book : ${book.author}`);
message(`Pages of book : ${book["pages"]}`);
message(`has been read : ${book["isRead"]}`);

message("complete information of the book");
message(book);

// updated book
book.genre = "Shonen";

message("Updating the book....");
message("Book has been updated");
message("Updated book");

message(book);

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

message("Title : " + movies[1].title);

message("before :");
message(movies);

// adding one object to array with title property only
movies.push({ title: "Splash" });

// update the year of first object
movies[0].year = 2023;

message("after : ");
message(movies);

const student = {
  name: "Jeremy Glenn Panlasigui",
  age: 24,
  subjects: ["Web Development", "Data Science", "Java"],
};

message("Student Info : ");
message(student);

// print the first subjects
message("First subject : " + student.subjects[0]);

// add new subject on the array
student.subjects.push("Communication Skills");

message("Student Updated Info : ");
message(student);

const recipe = {
  name: "Pasta Salad",
  ingredients: [
    { name: "Cherry tomatoes", quantity: "1 cup" },
    { name: "Cucumber", quantity: "1 diced" },
    { name: "Red onion", quantity: "1 small" },
  ],
  isVegetarian: true,
};

message(
  "The second recipe of " + recipe.name + " is " + recipe.ingredients[1].name
);

// add ingredients
recipe.ingredients.push({ name: "Corn", quantity: "1 half cup" });

// iterate the whole object
for (let key in recipe) {
  message(recipe[key]);
}
