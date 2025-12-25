let str = 'entertainment';
console.log(str.indexOf('e')); // 0
console.log(str.indexOf('t')); // 2
console.log(str.indexOf('t', 4)); // 5

console.log(str.lastIndexOf('e')); // 10
console.log(str.lastIndexOf('t')); // 12

// Find  non-repeated character in a string
for(char of str) {
    if(str.indexOf(char) === str.lastIndexOf(char)) {
    console.log(' non-repeated character- ', char);
     
    }
}

// Find first non-repeated character in a string
for(char of str) {  
    if(str.indexOf(char) === str.lastIndexOf(char)) {
    console.log('First non-repeated character- ', char);
     break;
    }
}