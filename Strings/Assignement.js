//1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'


function reverseString(str) {
    let reversed = '';
    console.log('Input string is-', str);
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log('Revers string is -', reverseString("sachin")); // tpircSavaJ

console.log("======================================================")

// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

function reverseWordsManual(str) {
    console.log('Input string-', str);
    let words = str.split(" ");
    let result = "";

    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i] + " ";
    }
    return result.trim();
}

console.log('Revers words -', reverseWordsManual("This is javascript class"));

// Options - 2
function reverseWordOrder(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWordOrder("Hello World JavaScript"));

console.log('=================================================================');


// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

let str = 'entertainment';
console.log('Input string - ', str)
for (char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
        console.log('first non-repeated character- ', char);
        break;
    }
}
console.log('=================================================================');



// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(toTitleCase("this is javascript class"));

// Options -2 
function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

console.log(toTitleCase("this is javascript class"));

console.log('=================================================================');
// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript

let sentence = 'this is javascript class';
console.log('Input sentence - ', sentence);
let words = sentence.split(" ");
let longestWord = "";
for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log('Longest word in the sentence is - ', longestWord);

console.log('=================================================================');

// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'

function maskMiddleDigits(accNo) {
    let str = accNo.toString();

    if (str.length <= 4) return str; // nothing to mask

    let firstTwo = str.slice(0, 2);
    let lastTwo = str.slice(-2);
    let middleMask = "*".repeat(str.length - 4);

    return firstTwo + middleMask + lastTwo;
}

console.log(maskMiddleDigits("1234567890"));


console.log('=================================================================');

// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

function formatCreditCard(cardNo) {
    return cardNo.match(/\d{4}/g).join("-");
}

console.log(formatCreditCard("1111222233334444"));


console.log('=================================================================');


   
// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    return s1 === s2;
}
console.log(isAnagram("listen", "silent")); // true


console.log('=================================================================');

	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'

function removeSpecialChars(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeSpecialChars("hello@#hi&"));


console.log('=================================================================');

// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'


function moveSpecialCharsToEnd(str) {
    let letters = str.replace(/[^a-zA-Z0-9]/g, "");
    let specials = str.replace(/[a-zA-Z0-9]/g, "");

    return letters + specials;
}

console.log(moveSpecialCharsToEnd("hello@#hi&"));

console.log('=================================================================');


	 