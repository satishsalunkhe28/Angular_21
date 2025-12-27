//split example
let sentence = "Hello World! Welcome to JavaScript Array methods.";
console.log("Original String: ", sentence); // "Hello World! Welcome to JavaScript Array methods."
// Splitting the string into an array of words
let wordsArray = sentence.split(" ");
console.log("Array of Words: ", wordsArray);
// Splitting the string into an array of characters
let charsArray = sentence.split("");
console.log("Array of Characters: ", charsArray);
// Splitting the string with a limit
let limitedArray = sentence.split(" ", 4);
console.log("Limited Array of Words (first 4 words): ", limitedArray);
console.log("======================================================")   