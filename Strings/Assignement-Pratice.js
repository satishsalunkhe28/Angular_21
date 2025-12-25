// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

let str ='satish';
let revstr = ""
for(let i = str.length -1; i>=0;i--)
{
    revstr = revstr + str[i];
}
console.log(revstr);


// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

let str1 = 'This is javascript class';
let words = str1.split(" ");

let revwords = "";
for(let i = words.length -1; i>=0;i--)
{
    revwords += words[i] + " ";
}
console.log(revwords.trim());



// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

let str2 = 'entertainment';
for(char of str2){
    if(str2.indexOf(char) === str2.lastIndexOf(char)){
        console.log('First non-repeated character- ', char);
        break;
    }
}


// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'
   
let str3 = 'this is javascript class';
let words1 = str3.split(" ");
let titlecase = "";         
for(let i=0;i<words1.length;i++){
    titlecase += words1[i].charAt(0).toUpperCase() + words1[i].slice(1) + " ";
}
console.log(titlecase.trim());  




// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript

    let strlng  =  'this is javascript class'
    let res = strlng.split(' ');
    let longest = "";
    for(word of res)
    {
      if(longest.length < word.length)
      {
           longest = word
      }
              
    }
    console.log(longest);


//     6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
    let accountNo = '12345678987';
    let maskedAccNo = accountNo.slice(0,2) + '*'.repeat(accountNo.length -4) + accountNo.slice(-2);
    console.log(maskedAccNo);
    