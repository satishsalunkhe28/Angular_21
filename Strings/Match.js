// match string against a regular expression
let str = "The rain in SPAIN stays mainly in the plain";

let result = str.match(/ain/); //   1st  match
console.log(result); // [ 'ain'] 

let result1 = str.match(/ain/g); // global match
console.log(result1); // [ 'ain', 'ain', 'ain', ] 

let result2 = str.match(/ain/gi); // global match
console.log(result2); // [ 'ain', 'AIN', 'ain', 'ain' ]


let str1 = "ram and hari are 211 friends, they have 14 bikes and 11 car";
let result3 = str1.match(/\d{1,2}/g); // match digits
console.log(result3); // [ '2', '14', '11' ]
console.log(str1.match(/[0-9]{1,}/g)); // [ '2', '14', '11' ]