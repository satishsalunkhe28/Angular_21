// reduce example
let numbers = [10, 20, 30, 40, 50];
console.log("Original Array: ", numbers); // [10, 20, 30, 40, 50]

// Sum of all elements
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all elements: ", sum); // 150
// Product of all elements
let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Product of all elements: ", product); // 12000000
// Finding the maximum element
let max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log("Maximum element: ", max);      
// Finding the minimum element
let min = numbers.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));
console.log("Minimum element: ", min);
console.log("======================================================")   
let arr = [1, 2, 3, 4, 5];

// Sum of elements
let total = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of array elements is: ${total}`); // 15    
// Product of elements
let prod = arr.reduce((acc, curr) => acc * curr, 1);
console.log(`Product of array elements is: ${prod}`); // 120    
// Finding maximum element
let maximum = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(`Maximum element in array is: ${maximum}`);
// Finding minimum element
let minimum = arr.reduce((acc, curr) => (acc < curr ? acc : curr));
console.log(`Minimum element in array is: ${minimum}`);
console.log("======================================================")   
// reduce example
let nums = [3, 6, 9, 12, 15];
console.log(`Original array is : ${nums}`); 
// Sum of all elements
let sum1 = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of all elements is : ${sum1}`);
// Product of all elements
let product1 = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(`Product of all elements is : ${product1}`);    
// Finding the maximum element

let max1 = nums.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(`Maximum element is : ${max1}`);
// Finding the minimum element
let min1 = nums.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));
console.log(`Minimum element is : ${min1}`);
            
