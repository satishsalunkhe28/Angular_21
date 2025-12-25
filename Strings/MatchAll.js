let str = 'This is Javascript Class';

// Match all occurrences of 'is'
let matches = str.matchAll(/is/g);  
for (const match of matches) {
    console.log(match)
}

// Match all occurrences of 'a' with their index
let matchesWithIndex = str.matchAll(/a/g);  
for (const match of matchesWithIndex) {
    console.log(`Found '${match[0]}' at index ${match.index}`);
}