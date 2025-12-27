let arr = ["10", "20", "30", "40", "50"];
console.log(arr);
console.log("Array length: ", arr.length); // 5

// Accessing array elements using index
console.log("First element: ", arr[0]); // "10"
console.log("Third element: ", arr[2]); // "30" 

// Modifying array elements
arr[1] = "25";
console.log("Modified array: ",  arr); // ["10", "25", "30", "40", "50"]    

// Accessing last element using length property
console.log("Last element: ", arr[arr.length - 1]); // "50"

arr.push("60")  ; // adding element at the end
console.log("After push: ", arr); // ["10", "25", "30", "40", "50", "60"]

arr.pop(); // removing last element
console.log("After pop: ", arr); // ["10", "25", "30", "40", "50"]

arr.shift(); // removing first element
console.log("After shift: ", arr); // ["25", "30", "40", "50"]
arr.unshift("5","10"); // adding element at the beginning
console.log("After unshift: ", arr); // ["5", "25", "30", "40", "50"]

arr.shift(3); // removing first element
console.log("After another shift: ", arr); // ["25", "30", "40", "50"]


// delete an element
delete arr[2];
console.log("After deleting 3rd element: ", arr); // ["10", "25", undefined, "40", "50"]
console.log("Array length after deletion: ", arr.length); // 5 (length remains same)


// iterating over array elements
console.log("Iterating over array elements:");
for(let i= 0;i<=arr.length-1;i++){
    console.log('element at index', i, ':', arr[i]);
}

//for in loop
for (let i in arr) {
    console.log('Element at index',i,arr[i]);
}

//for off loop
for (let value of arr) {
    console.log("Element value: ", value);
}

//forEach method
console.log("Using forEach method:");
 arr.forEach((val)=>{
    console.log("Element value: ", val);
 })