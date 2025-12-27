// splice exapmles.
// Example 1: Basic usage of splice
let arr = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr}`);

// Remove 2 elements starting from index 1
  console.log('Removed Ellements',arr.splice(1,2,));
console.log(`Array after splice: ${arr}`); // ["A", "D", "E"]

// Example 2: Inserting elements using splice
let arr2 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr2}`);

let addedElements = arr2.splice(-1,0,"F","G");
console.log('Added Elements:',addedElements);
console.log(`Array after splice: ${arr2}`); // ["A", "B", "C", "D", "F", "G", "E"]

// Example 3: Replacing elements using splice
let arr3 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr3}`);
let replacedElements = arr3.splice(2,2,"X","Y");
console.log('Replaced Elements:',replacedElements);
console.log(`Array after splice: ${arr3}`); // ["A", "B", "X", "Y", "E"]   
console.log("======================================================")   
// Example 4: Using splice to remove all elements from a specific index
let arr4 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr4}`);      
let removedElements = arr4.splice(2);
console.log('Removed Elements:',removedElements);
console.log(`Array after splice: ${arr4}`); // ["A", "B"]       
console.log("======================================================")
// Example 5: Using splice with no deletion (only insertion)
let arr5 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr5}`);
let insertedElements = arr5.splice(2,0,"X","Y");
console.log('Inserted Elements:',insertedElements);
console.log(`Array after splice: ${arr5}`); // ["A", "B", "X", "Y", "C", "D", "E"]  

console.log("======================================================")
// Example 6: Using splice to replace all elements
let arr6 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr6}`);  
let allReplacedElements = arr6.splice(0,arr6.length,"X","Y","Z");
console.log('All Replaced Elements:',allReplacedElements);
console.log(`Array after splice: ${arr6}`); // ["X", "Y", "Z"]  
console.log("======================================================")
// Example 7: Using splice with negative start index
let arr7 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr7}`);
let negativeStartElements = arr7.splice(-2,1,"X");
console.log('Negative Start Elements:',negativeStartElements);
console.log(`Array after splice: ${arr7}`); // ["A", "B", "C", "D", "X"]            
console.log("======================================================")   
// Example 8: Using splice to remove elements without replacement
let arr8 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr8}`);      
let removeWithoutReplacement = arr8.splice(1,3);
console.log('Removed Elements without replacement:',removeWithoutReplacement);
console.log(`Array after splice: ${arr8}`); // ["A", "E"]       
console.log("======================================================")   
// Example 9: Using splice to insert elements at the end
let arr9 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr9}`);  
let insertAtEnd = arr9.splice(arr9.length,0,"X","Y");
console.log('Inserted Elements at the end:',insertAtEnd);
console.log(`Array after splice: ${arr9}`); // ["A", "B", "C", "D", "E", "X", "Y"]  
console.log("======================================================")
// Example 10: Using splice to clear the entire array
let arr10 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr10}`); 
let clearArray = arr10.splice(0,arr10.length);
console.log('Cleared Elements:',clearArray);
console.log(`Array after splice: ${arr10}`); // []  
console.log("======================================================")   
// Example 11: Using splice with no arguments
let arr11 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr11}`);
let noArgSplice = arr11.splice();
console.log('No Argument Splice Result:',noArgSplice);
console.log(`Array after splice: ${arr11}`); // ["A", "B", "C", "D", "E"]
console.log("======================================================")   
// Example 12: Using splice to remove elements and capture them 
let arr12 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr12}`);
let capturedElements = arr12.splice(1,2);
console.log('Captured Removed Elements:',capturedElements);
console.log(`Array after splice: ${arr12}`); // ["A", "D", "E"]   
console.log("======================================================")
// Example 13: Using splice to insert multiple elements
let arr13 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr13}`);
    
let insertMultiple = arr13.splice(2,0,"X","Y","Z");
console.log('Inserted Multiple Elements:',insertMultiple);
console.log(`Array after splice: ${arr13}`); // ["A", "B", "X", "Y", "Z", "C", "D", "E"]
console.log("======================================================")
// Example 14: Using splice to replace elements with more elements
let arr14 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr14}`);
let replaceWithMore = arr14.splice(1,2,"X","Y","Z");
console.log('Replaced with More Elements:',replaceWithMore);
console.log(`Array after splice: ${arr14}`); // ["A", "X", "Y", "Z", "D", "E"]  
console.log("======================================================")
// Example 15: Using splice to replace elements with fewer elements
let arr15 = ["A", "B", "C", "D", "E"];
console.log(`Initial Array: ${arr15}`);
let replaceWithFewer = arr15.splice(1,3,"X");
console.log('Replaced with Fewer Elements:',replaceWithFewer);
console.log(`Array after splice: ${arr15}`); // ["A", "X", "E"] 
