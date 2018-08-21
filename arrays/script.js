// Declaring and assigning values to arrays
var books, movies;
books = ["The Hobbit", "The last of the Mohicans", "Harry Potter"];
movies = ["Lord of the Rings", "The Great Gatsby", "Titanic"];

console.log(books[1]);
console.log(movies[2]);

// Changing an item in an array
books[2] = "John Wick";
movies[1] = "King Arthur";

console.log(books);
console.log(movies);

//Property
console.log("Array length: ", movies.length);

//Methods
movies.reverse();
console.log("After: ", movies);

movies.pop();
console.log("Pop: ", movies);

movies.shift();
console.log("Shift: ", movies);

movies.push("The Great Gatsby", "The Chronicles of Narnia");
console.log("Push: ", movies);
