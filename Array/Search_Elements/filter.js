//filter example
let numbers = [5, 12, 8, 130, 44];

// Filter elements greater than 10      
let filtered = numbers.filter(function(element) {
    return element > 10;
});
console.log("Elements greater than 10 are: ", filtered); // [12, 130, 44]
// Using arrow function

let filteredArrow = numbers.filter(element => element > 20);
console.log("Elements greater than 20 are: ", filteredArrow); // [130, 44]
// If no elements match, it returns an empty array
let noMatch = numbers.filter(element => element > 200);
console.log("Elements greater than 200 are: ", noMatch); // []
let arr = [1, 2, 3, 4, 5,4,6,7,8,9]; 



let evennumbers = arr.filter(function (ele) {
    return ele % 2 == 0
});
console.log(`Even numbers are ${evennumbers}`);
let oddnumbers = arr.filter(ele => ele % 2 != 0);
console.log(`Odd numbers are ${oddnumbers}`);   

console.log("===================================================================");
//filter example
let nums = [5, 12, 8, 130, 44];

// Filter elements greater than 10
let fltrd = nums.filter(filter => filter > 50);
console.log(`Value greater than 50 ${fltrd}`);

// Even  odd numbers are

let even = nums.filter(ele => ele % 2 === 0)
console.log(`Even num is = ${even}`);


let odd = nums.filter(odd => odd % 2 !== 0)
console.log(`Odd numbers are : ${odd}`);


