// Creating the book object and adding properties
let book = {
    bookName: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald"
};

// Adding prototype property price
book.__proto__.price = 19.99;

// Accessing and displaying output
console.log("Book Name:", book.bookName);
console.log("Author Name:", book.authorName);
console.log("Price:", book.price);
