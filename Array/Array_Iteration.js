// Array iteration examples.

let arr = [10, 20, 30, 40, 50];
console.log(`Array value is  : ${arr}`);

// Iterate Array elements
// =======================
// 1. loop
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(`Element of array at index ${i} is : ${arr[i]}`);
}
// 2. for-in
for (let i in arr) {
    console.log(`Element of array at index ${i} is : ${arr[i]}`);
}

// 3. for-of
for (let element of arr) {
    console.log(`Element of array is : ${element}`);
}   
// 4. forEach()
arr.forEach((ele,ind,arr) => {
    console.log(`Element of array index ${ind} is : ${ele}`);
});