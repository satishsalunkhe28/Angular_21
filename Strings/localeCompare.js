// localcompaire example
let str1 = "Hello World";
let str2 = "Hello World";
let str3 = "Hello JavaScript";  
console.log(str1.localeCompare(str2)); // 0 (strings are equal)
console.log(str1.localeCompare(str3)); // 1 (str1 is greater than str3)
console.log(str3.localeCompare(str1)); // -1 (str3 is less than str1)   
// localcompaire with sensitivity option
let str4 = "hello";
let str5 = "HELLO";
console.log(str4.localeCompare(str5, undefined, { sensitivity: 'base' })); // 0 (case insensitive)
console.log(str4.localeCompare(str5, undefined, { sensitivity: 'case' })); // 1 (case sensitive)            