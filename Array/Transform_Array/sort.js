//  sort    example

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array: ", fruits); // ["Banana", "Orange", "Apple", "Mango"]

// Sorting the array in ascending order
fruits.sort();
console.log("Sorted Array (Ascending): ", fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Sorting the array in descending order
fruits.sort((a, b) => b.localeCompare(a));
console.log("Sorted Array (Descending): ", fruits); // ["Orange", "Mango", "Banana", "Apple"]   

// Original array remains unchanged
console.log("Original Array after sorting: ", fruits); // ["Orange", "Mango", "Banana", "Apple"]  
console.log("======================================================")   



let numbers = [40, 100, 1, 5, 25, 10];  
console.log("Original Number Array: ", numbers); // [40, 100, 1, 5, 25, 10]
// Sorting numbers in ascending order
console.log("Sorted Numbers (Ascending): ", numbers.sort((a, b) => a - b)); // [1, 5, 10, 25, 40, 100]
// Sorting numbers in descending order
console.log("Sorted Numbers (Descending): ", numbers.sort((a, b) => b - a)); // [100, 40, 25, 10, 5, 1]
// Original array remains unchanged
console.log("Original Number Array after sorting: ", numbers); // [100, 40, 25, 10, 5, 1]
console.log("======================================================")





