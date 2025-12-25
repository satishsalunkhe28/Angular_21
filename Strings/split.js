//split examples
let str = "Hello, welcome to the world of JavaScript";
let words = str.split(" ");
console.log(words); // ['Hello,', 'welcome', 'to', 'the', 'world', 'of', 'JavaScript']

console.log('===================================');
let chars = str.split("");
console.log(chars);
console.log('===================================');
let limited = str.split(" ", 3);
console.log(limited); // ['Hello,', 'welcome', 'to']
console.log('===================================');
let noDelimiter = str.split();
console.log(noDelimiter); // ['Hello, welcome to the world of JavaScript']
console.log('===================================');
let commaSeparated = str.split(",");
console.log(commaSeparated); // ['Hello', ' welcome to the world of JavaScript']
console.log('===================================');
let multiCharDelimiter = str.split("o");
console.log(multiCharDelimiter); // ['Hell', ', welc', 'me t', ' the w', 'rld ', 'f JavaScript']    
console.log('===================================');
let regexDelimiter = str.split(/o/);
console.log(regexDelimiter); // ['Hell', ', welc', 'me t', ' the w', 'rld ', 'f JavaScript']    
console.log('===================================');
let withSpaces = "  Hello   World  ";
let splitWithSpaces = withSpaces.split(" ");
console.log(splitWithSpaces); // ['', '', 'Hello', '', '', 'World', '', ''] 
console.log('===================================');
