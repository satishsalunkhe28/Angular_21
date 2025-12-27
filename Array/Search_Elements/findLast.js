//findLast example
let numbers = [10, 20, 30, 40, 50, 60];
console.log(`Original array: ${numbers}`);
let lastEven = numbers.findLast(num => num % 2 === 0);
console.log(`Last even number in the array: ${lastEven}`);
let lastGreaterThanThirty = numbers.findLast(num => num > 30);

console.log(`Last number greater than 30 in the array: ${lastGreaterThanThirty}`);

// Example with strings
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(`Original array: ${fruits}`);
let lastFruitWithE = fruits.findLast(fruit => fruit.includes('e'));
console.log(`Last fruit containing 'e': ${lastFruitWithE}`);

// Example with objects
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "vid", age: 38 },
    { name: "David", age: 40 }
];
console.log(`Original array: `, people);
let lastPersonAbove30 = people.findLast(person => person.age > 20);
console.log(`Last person older than 30: `, lastPersonAbove30);  





