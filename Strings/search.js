// search example
let str = "Please locate where 'locate' occurs!";
let pos = str.search("locate");
console.log(pos); // 7
// search with regex (case insensitive)
let pos2 = str.search(/LOCATE/i);
console.log(pos2); // 7 
// search with regex (global flag - finds first occurrence only)
let pos3 = str.search(/locate/g);
console.log(pos3); // 7
// search with regex (not found case)
let pos4 = str.search(/hello/i);
console.log(pos4); // -1    