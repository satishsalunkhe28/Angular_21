// IndexOf and LastIndexOf
//indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.

let arr = ["Satish","Sachin","Ram","Sham"];
console.log(arr.indexOf("Sham"));


// String Example
let myString = "Hello World";
console.log(myString);
console.log(myString.indexOf("World")); // Returns 6 (the 'W' is at the 6th position) [3, 10].
console.log(myString.indexOf("o"));     // Returns 4 (the first 'o') [3, 10].
console.log(myString.indexOf("Z"));     // Returns -1 (not found) [3, 7].

console.log("==========================================================")
// Array Example
let myArray = ['apple', 'banana', 'cherry','Per'];
console.log(myArray.indexOf('banana')); // Returns 1 [2, 14].
console.log(myArray.indexOf('grape'));  // Returns -1 [2, 14].

console.log("==========================================================")


const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Output: 3

console.log(animals.lastIndexOf("Tiger"));
// Output: 1

// Search for "Dodo" starting backward from index 2
console.log(animals.lastIndexOf("Dodo", 2));
// Output: 0

console.log(animals.lastIndexOf("Giraffe"));
// Output: -1



 