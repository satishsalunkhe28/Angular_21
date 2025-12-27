// toSpliced examples
let arr = [10, 20, 30, 40, 50];
console.log(`Initial Array: ${arr}`);
// Example 1: Removing elements using toSpliced
let newArr1 = arr.toSpliced(1, 2);
console.log(`Array after toSpliced (removal): ${newArr1}`); // [10, 40, 50]
// Original array remains unchanged
console.log(`Original Array remains unchanged: ${arr}`); // [10, 20, 30, 40, 50]
// Example 2: Inserting elements using toSpliced
let newArr2 = arr.toSpliced(2, 0, 25, 27);
console.log(`Array after toSpliced (insertion): ${newArr2}`); // [10, 20, 25, 27, 30, 40, 50]
// Original array remains unchanged
console.log(`Original Array remains unchanged: ${arr}`); // [10, 20, 30, 40, 50]    