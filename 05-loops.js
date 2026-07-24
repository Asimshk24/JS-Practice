///// LOOPS

/* LOOP NEEDS ONE UPDATING CONDITION, ONE STOPPING CONDITION, BUT FOR THE BOTH WE NEED A VARIABLE TO USE IN THAT, 
 THE VARIABLE CAN BE EXTERNAL, BUT GENERALLY THE VARIABLE IS INITIALIZED IN  THE LOOP ( IN FOR LOOP ) 
 IN WHILE LOOP THE INITIALIZATION IS DONE OUTSIDE OF THE LOOP THEN WRITE THE STOPPING CONDITON AND THEN THE UPDATING CODITION INSIDE IT.
 FOR IS USED WHEN U KNOW WHEN TO STOP, THE STOPPING CONDITION IS FIXED, 
 WHILE IS PERFECT WHEN THE STOPPING CONDITION IS UNDEFINED.
*/

//----------------------------------------

// FOR LOOP - PRINT MMULTIPLE TIMES

for (let i=1; i <= 10; i++){
    console.log("Asim");
}

//----------------------------------------

// ### SUM OF 1 - N NUMBERS


let sum = 0;

for (let i = 1; i <=115; i++){
    sum = sum + i;
}

console.log(sum);
console.log("The Loop is Ended");

//----------------------------------------

// ### PRINTING I - VISUALISING LOOP

for(let i = 1; i <=5; i++){
    console.log("i :", i);
}

//----------------------------------------

// ### INFINITE LOOP 

// A LOOP THAT NEVER ENDS == RESTRICTED  ( THE STOPPING CONDITION IS ALWAYS TRUE SO THE LOOP KEEPS GOING ON )

for(let i = 1; i > 0; i++){
    console.log(i);
}

//----------------------------------------//----------------------------------------

// WHILE LOOP

// ### FIRST WHILE LOOP EX -

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

// USER WHEN THE STOPPING CONDITION IS NOT PER-DEFINED

// SECOND WHILE LOOP EXAMPLE, IMPLIMENTATION -

let password = "";

while(password !== "admin"){
    password = prompt("Enter Your Password");
}

//----------------------------------------

// DO-WHILE LOOP

// RUN THE LOOP FIRST THEN CHECK THE CONDITION LATER - THE LOOP WILL EXECUTE ATLEAST ONCE EVEN IF THE CONDITION IS FALSE DIRECTLY IN FIRST CHECK.

// FIRST EX OF DO-WHILE

let i = 10;

do{
    console.log("i =", i);
    i++
} while(i <=5)


// SECOND EX

let i = 50;

do{
    console.log("ASIM");
    i++;
} while ( i <= 15 );

//----------------------------------------

// FOR-OF-LOOP

// USED TO PERFORM ACTIONS ON STRING AND ARRAYS -  PICK A STRING VARIABLE - CREATE ONE VARIABLE FOR LOOP (i), IN EACH ITERATION THE LOOP VAR HOLDS A SINGLE CHAR FROM THE TARGETED STRING AND THE LOOP COMPLETES WHEN THE STRING ENDS. IF ITS A ARRAY THEN IT PICKS ONE VALUE AT A TIME.

let name ="AsimShaikh";

let count = 0;

for(let i of name){
    console.log(i);
    count++
}

console.log(count);

//----------------------------------------

// EX 2 - FOR-OF LOOP

let name = "Asim";

let num = 0;

for(let count of name){
    console.log(count);
    num++;
}

console.log(num);

//----------------------------------------//----------------------------------------

// FOR-IN LOOP

// IF USED ON OBJECTS GIVE KEYS, IF USED ON ARRAY OR STRING, GIVES INDEX ONE BY ONE, SAME LOGIC LIKE FOR-OF, DIFF IS - VALUES VS KEYS & INDEX

// EX -

let student = {
    name : "Asim",
    age : 22,
    cgpa : 7.5,
    is_pass : true,
};

for(let keys in student){
    console.log(keys, "=", student[keys]);
    console.log("ITERATION done!!!");
}

//----------------------------------------

// SOME PRACTICE QUESTIONS -

//----------------------------------------

// ###  PRINT ALL EVEN NO. FROM 0-100

// USING I DIRECTLY

for(let i=2; i <=100; i=i+2){
    console.log(i);
};

// BY CREATING ANOTHER VARIABLE AND USING ITSELF IN STOPPING CONDITION AND UPDATING CONDITION

let num = 2;

for(let count = 1; num <=100; num = num + 2){
    console.log(num);
};

//----------------------------------------//----------------------------------------

// ### GUESS THE GAME NUMBER -

// SOL 1.

let num;

for(let i = 0; num !== 25;){
    num = Number (prompt("Enter Your Guess"));
}

//----------------------------------------

// SOL 2.

let gamenum = 25;
let usernum = Number(prompt("Enter your Guess"));

for(let i = 0; usernum !== gamenum;){
    usernum = Number(prompt("Enter your Guess Again"));
}

console.log("YOU WON");


//----------------------------------------
