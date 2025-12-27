    //toSorted example
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array: ", fruits); // ["Banana", "Orange", "Apple", "Mango"]
// Using toSorted to sort the array in ascending order
let sortedFruitsAsc = fruits.toSorted();
console.log("Sorted Array (Ascending) using toSorted: ", sortedFruitsAsc); // ["Apple", "Banana", "Mango", "Orange"]
// Using toSorted with a compare function for descending order
let sortedFruitsDesc = fruits.toSorted((a, b) => b.localeCompare(a));
console.log("Sorted Array (Descending) using toSorted: ", sortedFruitsDesc); // ["Orange", "Mango", "Banana", "Apple"]
// Original array remains unchanged
console.log("Original Array after toSorted: ", fruits); // ["Banana", "Orange", "Apple", "Mango"]
console.log("======================================================")   