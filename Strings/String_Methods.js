let str = "satish";

console.log(str.at(2)); // t
console.log(str.charAt(2)); // t
console.log(str[2]); // t
console.log(str.charAt(-2)); // '' (empty string)   charAt() doesnt work with -ve index
console.log(str.charCodeAt(2)); // 116 (ASCII value of 't')

console.log('======================================================')   

console.log(str.concat(" salunkhe")); // satish salunkhe
console.log(str + " salunkhe"); // satish salunkhe    
console.log(`${str} salunkhe`); // satish salunkhe

console.log('======================================================')   

