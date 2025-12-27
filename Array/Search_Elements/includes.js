// Includes example 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
console.log("Original Array: ", fruits); // ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
// Check if "Mango" is present in the array
let hasMango = fruits.includes("Mango");
console.log("Does the array include 'Mango'? ", hasMango); // true
// Check if "Grapes" is present in the array
let hasGrapes = fruits.includes("Grapes");      
console.log("Does the array include 'Grapes'? ", hasGrapes); // false   
// Check with a starting index
let hasOrangeFromIndex3 = fruits.includes("Orange", 3);
console.log("Does the array include 'Orange' from index 3? ", hasOrangeFromIndex3); // true
let hasBananaFromIndex2 = fruits.includes("Banana", 2);
console.log("Does the array include 'Banana' from index 2? ", hasBananaFromIndex2); // false
// Case sensitivity check
let hasapple = fruits.includes("apple");    
console.log("Does the array include 'apple'? ", hasapple); // false
// Original array remains unchanged
console.log("Original Array after includes check: ", fruits); // ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
console.log("======================================================")