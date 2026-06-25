///// STRINGS

//----------------------------------------

// SIMPLE STRING

let str = "Asim";

//----------------------------------------

// INBUILD PROPERTIES

// str.length

str.length;

// str[index_no] - to get the char on the index no. in a string

str[0];

//----------------------------------------//----------------------------------------

// TEMPLATE LITERALS - EMBEDDING THE EXPRESSIONS AND VARIABLES INTO A SINGLE STRING. ( ANOTHER WAY TO WRITE STRING + VARIABLE ) ( NOT A STRING PROPERTY )

let str = "asim";
let str1 = 22;

// NORMAL WAY
console.log("my name is ", str, "and i am", str1, "years old");


// TEMPLATE LITERAL - STRING INTERPOLATION - THE ENTIRE THING BECOMES A SINGLE STRING - ADDING THE PLACEHOLDERS FOR USING VARIABLES AND EXPRESSIONS.
console.log(`My name is ${str} and i am ${str1} years old`);


// ADDING AN EXPRESSION IN TEMPLATE LITERALS - ( expression - (1+2+3))

console.log(`adding 3 numbers which equals to ${1+2+3}`);


// ESCAPE CHARS - \n nxt line - \t  tab space       - counted as one char by .length property

//----------------------------------------

// STRING INBUILD METHODS / FUNCTIONS

// THIS IS UPPER CASE   this one is lower case  thisOneIsCamelCase  ThisOneIsPascalCase

//----------------------------------------

// 1. str.toUpperCase & str.toLowerCase     - use () in the end cuz its a function.

let str = "AsimShaikh";

console.log(str.toUpperCase());

console.log(str.toLowerCase());

// doing str.toUpperCase() or lower, does not change the original string, is will be stored in another var or the same var needs to be re-defined or used directly

// STRINGS ARE IMMUTABLE IN JS, TO MAKE CHANGES CREATE NEW STRING OR MANUALLY UPDATE ( RE-DECLARE ) THE STRINGS.

//----------------------------------------

// trim functino - it removes the whitespace before and after the string (Not in between)

let str = "     Asim Writing      JS     ";

console.log(str.trim());

//----------------------------------------

// STRING SLICE str.slice() to slict the part of the string using index values

let str = "ABCDEFGHI";

console.log(str.slice(0,5)); // 5 is not included its the limit

console.log(str.slice(2)); // if no ending index then consider all

//----------------------------------------

// STRING CONCATINATION  - COMBINE TWO STRINGS

let str = "this is ";
let str1 = "a string";

console.log(str.concat(str1));

//----------------------------------------

// REPLACE PART OF A STRING - STR.REPLACE(SEARCH-VAL, NEW-VAL);

let str = "Ball";

console.log(str.replace("B", "H"));

console.log(str.replace("ll","y"));

console.log(str.replace("l", "w"));  // REPLACE THE FIRST MATCH

console.log(str.replaceAll("l", "t")); // REPLACE ALL MATCHES

//----------------------------------------

// str.charAt() - to check the char on specific index

let str = "AsimShaikh";

console.log(str.charAt(0));

console.log(str.charAt(9));

//----------------------------------------

//  ### MINI challenge - TAKE THE USERS FULL NAME, GENERATE THE USERNAME FOR THE USER, START WITH @ FOLLOWED BY THE FULL NAME AND END WITH FULL NAME LENGTH

let username = prompt("Enter Your FullName");

console.log(`Your Username is @${username}${username.length}`);

// ### MINI challenge - Create a program that counts how many vowels (a, e, i, o, u) are present in a string.

let str = "AsimShaikh";

let count = 0;

for(let i of str){
    if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" || i==="A" || i==="E" || i==="I" || i==="O" || i==="U"){
        console.log(i)
        count++
    };
}

console.log("Total Vowels = ", count);

let str="AsimShaikh";

let count = 0;

for(let i of str){
    if (i.includes("aeiouAeiou")){
        console.log(i);
        count++
    }
}

//----------------------------------------
