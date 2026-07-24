// FUNCTIONS - A PART OF CODE WHICH CAN BE CALLED MULTIPLE TIMES TO PERFORM SOME PRE-DEFINED ACTIONS, AS MANY TIMES AS U WANT.

function first_function() {
    console.log("this is my first function");
    console.log("im learning js ");
}

//  PARAMETERS - PLACEHOLDER VARIABLES GIVEN WHEN DEFINING A FUNCTION,  ARGUMENTS - ACTUAL VALUES YOU PASS TO THE FUNCTION WHEN CALLING / INVOKING FUNCTION 
// PARAMETERS (X,Y) - GIVEN WHEN DEFINING FUNCTION.  ARGUMENTS (5,10) GIVEN WHEN CALLING / INVOKING A FUNCTION.

//----------------------------------------

// A SIMPLE FUNCTION - ADDITION OF TWO NUMBERS

// DEFINING -

function addition(x,y){
    let num1 = x;
    let num2 = y;

    let sum = x + y;

    console.log("Sum : ", sum);
}

// CALLING -

addition(20,30);

//----------------------------------------

// FUNCTIONS CAN BE STORED IN A VARIABLE FOR DIFF PURPOSES AND USECASES - HERE -

// ARROW FUNCTIONS - A SHORTER WAY TO WRITE FUNCTIONS. SPECIAL PURPOSE - SHORT SYNTAX, USE OF THIS KEYWORD IS HANDLED DIFFERENTLY.

const arrow = (x, y) => { return x+y;};


// can be short when you only have to give one parameter

const square = num => num + num;

square(10);

// EVEN SHORTER

const add = (a, b) => a + b;

// SHORTEST I GUESS - ONE PARAMTERE AND ONE EXPRESSION

const add = (a => a++ );

// ONLY ONE EXPRESSION MEANS AUTO RETURN ( EVEN WITH MULTI PARAMETERS )

const add = ((x,y,z) => x+y+z);

// ONLY ONE PARAMETER ( ) BECOMES OPTIONAL, NO PARAMTER / MUTLI PARAMTERS = () REQUIRED, ONE EXPRESSION = NO BRACES + AUTO RETURN, MUTLI EXPRESSION  = RETURN AND CURLY BRACES REQUIRED. 

//----------------------------------------

// ### 1. Create a function which takes string as argument and returns the number of voewls in it


function strcheck (text) {
    
    let vcount = 0;
    
    let str = text.toLowerCase()

    for(let i of str){
        if("aeiou".includes(i)){
            vcount++
        }
    }

    return vcount;
}

strcheck("Asim");


let arrfunction = (text) => {

        let vcount = 0;
    
    let str = text.toLowerCase()

    for(let i of str){
        if("aeiou".includes(i)){
            vcount++
        }
    }

    return vcount;
}

arrfunction("Asim");

//----------------------------------------

// CALLBACK FUNCTION - A FUNCITON WHICH IS PASSED TO ANOTHER FUNCTION AS ARGUMENT IS CALLED AS AN CALLBACK FUNCTION 

// ARRAY METHOD - FOR-EACH LOOP,  FOREACH() IS AN ARRAY METHOD THAT ITERATES ON EACH ELEMENT OF THE ARRAY AND AUTOMATICALLY PASSES ONE ELEMENT AT A TIME TO YOUR PREDEFINED FUNCTION, ALLOWING YOU TO PERFORM AN ACTION ON EVERY ELEMENT

// IN THIS METHOD, THE ARGUMENT YOU GIVE IS A FUNCTION AND THAT'S WHY IT'S CALLED A CALLBACK FUNCTION.

//----------------------------------------

// FOR-EACH METHOD OF ARRAY - FOR-EACH LOOP OF ARRAY -

const arr = [5, 10, 15, 20, 25, 30]

arr.forEach(function val (value) {       // passing normal function as a callback function
  console.log(value);
});


arry.foreach( (parametrr) => {      // passing arrow function as a callback function 
     console.log(para);
    }
)

function newone (parametrr) {   // created new function to use as callback function
    console.log(parametrr);
}

arr.foreach(newone);    // used the function which was defined previously


// these are multiple ways to use the callback functions

// 3 paramters can be given while passing a callback function - the first one stores the current value in each itiration, second one gives the index on each itiration, third one gives the whole array in every itiration they passes diff things in each itiration.

//----------------------------------------

arr.forEach((val,idx,arr));

// First-Order Function: A regular function that only accepts primitive data types (like numbers or strings) or standard objects as arguments, and only returns standard values. It does not interact with other functions.

// Higher-Order Function: A function that accepts another function as an argument, returns a function, or does both.

//----------------------------------------

// ### mini challange - using arr.foreach loop - print the square of each value in a given array

const arr = [3,4,5,6,7];

arr.forEach((value) => {
    console.log(value*value);
});

//----------------------------------------

// MAP - arr.map()  - is an array method, works like forEach but stores the returned values in a new array     - the main purpose of map is - IT TRANSFORMS ARRAYS AND CREATE NEW ONES.  - does not affect the original array like forEach.

const new_arr = arr.map((value) => {
    console.log(value*value);
    return value;
})

// return what you want to store in that array - so writing return here was important.

//----------------------------------------

// FILTER METHOD -  GIVE A CONDITOIN, ITIRATES ON VALUES OF ARRAY ONE BY ONE,  IF CONDITION IS TRUE - KEEP THE VALUE,  IF FALSE - REMOVE THE VALUE,      AND MAKES NEW ARRAY BY KEEPING ALL THE VALUES WHICH GAVE TRUE FOR THAT CONDITION


// this code filter out the number which are less then or equal to 50 after substraction 5 from them.

const arr = [55,37,25,28,62,77,56];

let new_arr = arr.filter((parameter) => {
    //some statemnt
    // some another statement
    //then return statement
    return parameter - 5 >= 50; 
})

console.log(new_arr);

//----------------------------------------

// REDUCE METHOD OF ARRAYS

/* arr.reduce() - ARRAY METHOD  - 


    INITIALISE THE METHOD ( NAME_ACC, NAME_CURR),
    THEN THE REDUCE LOOPS,
    CURR VALUE STORES THE CURRENT VALUE OF ARRAY,
    STATEMENTS AND EXPRESSIONS RUNS, ( expression - computes / calculates a value / statements - executes / performs some action)
    GET RETURNED VALUE,
    RETURNED VALUE STORED IN ACCUMULATOR,
    USED FOR NEXT ITIRATOIN,
    CURR HOLDS NEXT VALUE,
    NEXT ITIRATION,
    COVER ALL THE VALUES OF ARRAY,
    GET A FINAL SINGLE VALUE.

    */

    // GENERAL MEANING OF ACCUMULATOR - SOMETHING WHICH COLLECTES DATA CONTINUOUSLY WHICH LATER CAN BE USED FOR DIFFERENT PURPOSES.


    // syntax

    array.reduce((accumulator, currentValue) => {
        return update_acc;
    }, acc_initialValue);
    

    arr.reduce((acc, curr) => { 
        return acc + curr; 
    }, 0);

    // THE WHOLE THING RETURNS THE SINGLE VALUE WHICH IS STORED IN THE ACC IN THE LAST ITIRATOIN SO IT GETS STORED.

let single_value = arr.reduce((acc, curr) => { 
        return acc + curr; 
    }, 0);

    console.log(single_value)

    let arr =  [2, 4, 3, 6, 5, 8, 9];

    const output = arr.reduce((acc, curr) => {
        return acc > curr ? acc : curr;
    });

    console.log(output);

    //  return acc > curr ? acc : curr; -- learn this statement - short form of wot ? if else condition ?

// ### Mini Challange - sum of all num of arr - using reduce method - arr.reduce()

let arr = [12,33,35,25,10,23,43];

let sum = arr.reduce( (x, y) => { return x + y; }, 0 );

console.log(sum);

//----------------------------------------

// ### Mini Challange - array of marks of students, filter out 90+ marks

const arr = [0, 92, 95, 96, 50, 70, 86, 5, 67, 54, 99, 1];

let new_arr = arr.filter((marks) => {
     return marks > 90;
});

//----------------------------------------

// ### Mini Challange - take a num as input, create array from 1 to num

let num = Number(prompt("INPUT NUM"));

const arr = [];

for(let i = 1; i <= num; i++){
    arr.push(i);
}

console.log(arr);

// now use arr.reduce() method to calculate the sum of all num in array

const sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);

// now calculate the product of all num in the arr

const product = arr.reduce((acc, curr) => {
    return acc * curr;
}, 1);


//----------------------------------------