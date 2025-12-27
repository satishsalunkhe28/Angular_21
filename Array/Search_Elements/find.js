//Find example
let numbers = [10, 25, 30, 45, 50, 65];

// Find the first element greater than 40
let found = numbers.find(function(element) {
    return element > 40;
}); 
console.log("First element greater than 40 is: ", found); // 45

// Using arrow function
let foundArrow = numbers.find(element => element > 60);
console.log("First element greater than 60 is: ", foundArrow); // 65
// If no element is found, it returns undefined
let notFound = numbers.find(element => element > 100);
console.log("First element greater than 100 is: ", notFound); // undefined


let arr = [1, 2, 3, 4, 5,4,6,7,8,9]; 

let gratertatthree = arr.find(function (ele) {
    return ele > 3
});

console.log(`element greater than 3 is ${gratertatthree}`);


let max = arr.find(ele => ele > 3);
console.log(`first element greater than 3 is using arrow function ${max}`);


let users = [
    {name: 'Alice', age: 28},
    {name: 'Bob', age: 34},
    {name: 'Charlie', age: 22}
];

let usr = users.find(user => user.age < 30);
console.log("First user younger than 30 is: ", usr); // {name: 'Alice', age: 28}
// If no user is found, it returns undefined
let noUser = users.find(user => user.age > 40);
console.log("First user older than 40 is: ", noUser); // undefined



let user = users.find(user => user.age > 25)
console.log(`Age is greater that 25 : ${user.name} and age is ${user.age}`);
console.log(`Age is greater that 25 : ${user}`);

let s = arr.findLast(p => p > 4)
console.log(s)
