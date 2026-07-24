///// OPERATORS


//----------------------------------------

// I.  ARITHMETIC OPERATORS

//----------------------------------------

// 1. + - ADD

let a = 5;
let b = 10;

const ans = a+b;

console.log(ans);

//----------------------------------------

// 2. - - SUBTRACT

let a = 10;
let b = 5;

const ans = a-b;

console.log(ans);

//----------------------------------------

// 3. * -MULTIPLY

let a = 10;
let b = 5;

const ans = a*b;

console.log(ans);

//----------------------------------------

// 4.  / -DIVIDE

let a = 10;
let b = 5;

const ans = a/b;

console.log(ans);

//----------------------------------------

// 5. - modulus % -  ( gives remainder after doing / )

let a = 10;
let b = 5;

const ans = a%b;

console.log(ans);

//----------------------------------------

// 6. - exponential - ** ( raist to calculation)

let a = 10;
let b = 5;

const ans = a**b;

console.log(ans);

//----------------------------------------

// 7. - pre-increment - ++ (increase by 1)

let a = 10;

console.log("++a: " + ++a);

//----------------------------------------

// 8. - pre-decrement - -- ( decrese by 1)

let a = 10;

console.log("--a: " + --a);

//----------------------------------------

// 9. - post increment 

let a = 5;

console.log("a: " + a++);

console.log("a++: " + a);

//----------------------------------------

// 10. - post decrement

let a = 5;

console.log("a: " + a--);

console.log("a--: " + a);

// ( PRE - FIRST UPDATE THEN EXECUTE, POST - FIRST EXECUTE THEN UPDATE )


//----------------------------------------

// II.  ASSIGNMENT OPERATORS

//----------------------------------------

// 1. = simply assigning the value into a variable

let a = "Fullname";

//----------------------------------------

// 2. +=  add & store the result into itself

let a = 5;

a += 1;

console.log(a);

//----------------------------------------

// 3. -= substract and store the result into itself

let a = "asim";

a -= "as";

console.log(a);

// same goes for  += -= *= /= %= **=  ( PERFORM THE ACTION WITH VARIABLE AND SAVE THE UPDATED VALUE INTO THE VARIABLE ITSELF)

//----------------------------------------//----------------------------------------

// III. COMPARISON OPERATORS

//----------------------------------------

// 1. == Equals to  -

let a = 5;

let b = 10;

console.log(a==b); // its askin Equal ? - false

//----------------------------------------

// 2. != not Equals to

let a = 5;

let b = 5;

console.log(a!=b); //

//----------------------------------------

// 3. === equals to with type  -compares values and types

let a = 5;
let b = "5";

console.log(a==b); // true - value same

console.log(a===b); // false - value equal but type diff

//----------------------------------------

// 4. !== Not Equals to with type

let a = 5;
let b = 5;

console.log(a!=b);
console.log(a!==b);

//----------------------------------------

// 5. < > greater then and less then

let a = 5;
let b = 10;

console.log(a<b);
console.log(a>b);

//----------------------------------------

// 6. <= >=  less then equals to and greater then equals to

let a = 5
let b = 5;

console.log(a<=b);
console.log(a>=b);


//----------------------------------------

// IV. LOGICAL OPERATORS

//----------------------------------------

// 1. AND &&  - if both true then true otherwise false

let a = 5;
let b = 10;

let condition1 = (a<b); // true
let condition2 = (a>b) // false

console.log(condition1 && condition2); // true + flase = false

//----------------------------------------

// 2. OR || - even if one is true then true otherwise false

let a = 5;
let b = 10;

let condition1 = (a<b); // true
let condition2 = (a>b) // false

console.log(condition1 || condition2); // true + false = true

//----------------------------------------

// 3. NOT ! =  if true then false - if false then true  ( reverse logic)

let a = 5;
let b = 10;

let condition1 = (a<b); // true
let condition2 = (a>b) // false

console.log(!(condition1)) // not of condition 1 = true => false


//----------------------------------------
