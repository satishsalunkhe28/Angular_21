var a = 10;  //Global Scope
let b = 20;  //Global Scope
const c = 30;    //Global Scope  
console.log('Global Scope -');
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);


function demoFunction() {
    var d = 40;  //Function Scope
    e = 50;  //Global Scope (not recommended)
    console.log(`Inside Function Scope -`);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`d = ${d}`);
}

function demoBlck(){
   // console.log(`d = ${d}`); // Uncaught ReferenceError: d is not defined
    console.log(`e = ${e}`); // e is accessible here as it was declared without var, let or const
}

demoFunction();
demoBlck();