var a1 = 10;
let a2 = 20;
const a3 = 30;  
console.log('before value change:');
console.log('a1 = ' + a1);
console.log('a2 = ' + a2);
console.log('a3 = ' + a3);    

a1 = 100;
a2 = 200;   
 a3 = 300;    // Uncaught TypeError: Assignment to constant variable. 
console.log('after value change:');
console.log('a1 = ' + a1);
console.log('a2 = ' + a2);
console.log('a3 = ' +  a3);    