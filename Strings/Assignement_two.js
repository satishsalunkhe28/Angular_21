// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let str = 'entertainment';
let charCount = {};
for (let char of str) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}
for (let char in charCount) {
    console.log(`${char} : ${charCount[char]}`);
}

// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

let inputStr = 'hello world';
let frequency = {};
for (let char of inputStr) {
    if (char !== ' ') {
        frequency[char] = (frequency[char] || 0) + 1;
    }
}
let maxChar = '';
let maxCount = 0;
for (let char in frequency) {
    if (frequency[char] > maxCount) {
        maxCount = frequency[char];
        maxChar = char;
    }

}
console.log(`Character with max occurrences is '${maxChar}' with count ${maxCount}`);


// 3. Swap The case for Each Character in a string
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let swapStr = 'Hello World';
let swapped = '';
for (let char of swapStr) {
    if (char === char.toUpperCase()) {
        swapped += char.toLowerCase();
    } else {
        swapped += char.toUpperCase();
    }
}
console.log(swapped);

// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'
let nameStr = 'Rabindra Nath Tagore';
let nameParts = nameStr.split(' ');
let abbreviation = '';
for (let i = 0; i < nameParts.length; i++) {
    if (i < nameParts.length - 1) {
        abbreviation += nameParts[i].charAt(0).toUpperCase() + '. ';
    } else {
        abbreviation += nameParts[i].toLowerCase();
    }
}
console.log(abbreviation);

// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

// 6. Ask user to enter a sequence of parantheses and validate
//    input: '([{ }])'
//    output : true



// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...


let word = 'ABC';
let permutations = [];
for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
        for (let k = 0; k < word.length; k++) {
            if (i !== j && j !== k && i !== k) {
                permutations.push(word[i] + word[j] + word[k]);
            }

        }
    }
}
console.log('Permutations are: ', permutations);


// 8. Ask user to enter a number and convert that to Roman value
//    input:   9    12
//    output : IX   XII

// 9. Ask user to enter a roman string and convert that to integer value
//    input:   IX    XII
//    output : 9     12

// 10. Ask user to enter a  string , and display in below format
//     input: aaabbc
//     output : a3b2c1