//----------------------------------------

///// CONDITIONAL STATEMENTS

//----------------------------------------

// 1. IF STATEMENT

//----------------------------------------

// ex. 1 -

let mode = "dark";

if (mode == "dark"){
    console.log("dark mode");
};

//----------------------------------------

// ex. 2 -

let age = 22;

if (age >= 18){
    console.log("can vote");
};

//----------------------------------------

// 2. IF-ELSE STATEMENT

//----------------------------------------

// ex. 1 -

let mode = "dark ";

if(mode == "light"){
    console.log("light mode");
} else {
    console.log("dark mode");
};

//----------------------------------------

// ex. 2 -

let age = 22;

if (age <= 18){
    console.log("can not vote");
} else {
    console.log("can vote");
}


//----------------------------------------

// 3. ELSE-IF 

let age = prompt("What is your age?");

if (age < 18) {
    console.log("not adult");
} else if (age < 60) {
    console.log("adult");
} else if (age > 60) {
    console.log("old");
} else {
    console.log(null);
}


//----------------------------------------


// ### MINI challenge -- WRITE A PROGRAM TO CHECK IF THE NUMBER IS EVEN OR ODD

let num = prompt("Enter Num");

let ans = (num%2);

console.log(ans);

if (ans == 0){
    console.log(num + " is EVEN");
} else {
    console.log(num + " is ODD");
};


//----------------------------------------


// 4.  TERNARY OPERATOR - syntax - condition ? A : B - if the condition is true, A gets executed, if false then B gets executed.   - short from of if else - produces a value, use when choosing between two values and get return output automatically.

let age = prompt("what is your age ?");

// let result = age > 18 ? "adult" : "not adult";

age > 18 ? console.log("adult") : console.log("not adult");

// console.log(result);

//----------------------------------------

// ### MINI challenge - WRITE A CODE TO CHECK IF THE GIVEN NUMBER IS A MULTIPLE OF 5, ALSO DO IT FOR NUM = 3.

// for 5 - 

let num = prompt("Enter Num");

num % 5 == 0 ? console.log(num + " is Multiple of 5") : console.log(num + " is Not Multiple of 5");

// for 3 -

let num = prompt("Enter Num");

num % 3 == 0 ? console.log(num + " is Multiple of 3") : console.log(num + " is Not Multiple of 3");

//----------------------------------------

// ### MINI challenge - WRITE A CODE TO GIVE GRADES TO STUDENTS ACCORDING TO THEIR MARKS

// SOL 1 

let marks = Number(prompt("Enter your Makrs"));

if (marks >= 80){
    console.log(" YOUR GRADE IS 'A' ");
} else if ( marks >= 70){
    console.log("YOUR GRADE IS 'B' ");
} else if (marks >=60) {
    console.log("YOUR GRADE IS 'C' ");
} else if (marks >= 50){
    console.log("YOUR GRADE IS 'D' ");
} else if (marks < 50){
    console.log("YOUR GRADE IS 'F' ");
}

//----------------------------------------

// SOL 2 

let marks = Number(prompt("Enter your marks"));

if ( marks > 100 || marks < 0 ){
    console.log("INVALID MARKS!")
}else if ( marks <= 100 && marks >= 90 ){
    console.log("A")
} else if ( marks < 90 && marks >= 70 ){
    console.log("B")
} else if (marks < 70 && marks >= 60){
    console.log("C")
} else if ( marks < 60 && marks >= 50){
    console.log("D")
} else if ( marks < 50 && marks >= 0 ){
    console.log("F");
}

//----------------------------------------//----------------------------------------

// ### mini challenge - TAKE 2 NUM AND PRINT THE GREATER ONE

let num1 = Number(prompt("Enter Number 1"));

let num2 = Number(prompt("Enter Number 2"));

if (num1 > num2 ){
    console.log("Number 1 is greater")
} else {
    console.log("Number 2 is greater")
}

//----------------------------------------//----------------------------------------

// ### Mini challenge - compare 3 num & print the greatest

// SOL 1 - compare one number with three using && 

let num1 = Number(prompt("Enter Number 1"));

let num2 = Number(prompt("Enter Number 2"));

let num3 = Number(prompt("Enter Number 3"));

if (num1 > num2 && num1 > num3){
    console.log(num1 + " is greatest")
} else if (num2 > num1 && num2 > num3){
    console.log(num2 + " is greatest")
} else if (num3 > num1 && num3 > num1){
    console.log(num3 + " is greatest")
}

//----------------------------------------

// SOL 2 - by using var higher

let num1 = Number(prompt("Enter Number 1"));

let num2 = Number(prompt("Enter Number 2"));

let num3 = Number(prompt("Enter Number 3"));

let higher;

if (num1 > num2){
    higher = num1;
} else {
    higher = num2;
}

if (higher > num3){
    console.log(higher + " is greater");
} else {
    console.log(num3 + " is greater");
}


//----------------------------------------
