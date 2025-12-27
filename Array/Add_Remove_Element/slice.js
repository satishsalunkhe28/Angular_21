// slice example
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log("Original Array: ", colors); // ["Red", "Green", "Blue", "Yellow", "Purple"]
// Using slice to extract a portion of the array
let slicedColors1 = colors.slice(1, 4);
console.log("Sliced Colors 1: ", slicedColors1); // ["Green", "Blue", "Yellow"]
let slicedColors2 = colors.slice(2);
console.log("Sliced Colors 2: ", slicedColors2); // ["Blue", "Yellow", "Purple"]
let slicedColors3 = colors.slice(-3, -1);
console.log("Sliced Colors 3: ", slicedColors3); // ["Blue", "Yellow"]
// Original array remains unchanged
console.log("Original Array after slicing: ", colors); // ["Red", "Green", "Blue", "Yellow", "Purple"]  
console.log("======================================================")


