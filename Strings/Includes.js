let str = "hello world";
console.log(str.includes("world")); // true
console.log(str.includes("world", 6)); // true
console.log(str.includes("world", 7)); // false          
console.log(str.includes("world", -5)); // true  (-ve index counts from end) 
console.log(str.includes("hello", -11)); // true 
console.log(str.includes("hello", -10)); // false    
console.log(str.includes("o", 5)); // true
console.log(str.includes("o", 6)); // false  
console.log(str.includes("o", -6)); // true
console.log(str.includes("o", -5)); // false   
          
console.log('======================================================')   
// Check if string includes only spaces
let str1 = "     ";
console.log(str1.includes(" "));    // true
console.log(str1.includes("   "));   // true   

console.log(str1.includes("ld"));  // true
console.log(str.includes("w"));  // false