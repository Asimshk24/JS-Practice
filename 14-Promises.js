//----------------------------------------

// ADVANCED JAVASCRIPT CONCEPTS


/*

SYNCHRONOUS-PROGRAMMING-

    Code works in liner flow, every part of code runs one after another, every part of code waits for its previous code to complete its execute first
    
    sometimes the previous code take too long to execute or get's stuck, which blocks the entire flow and stops the execution of the entire code which comes after.

ASYNCHRONOUS-PROGRAMMING -

    A way of programming where a part of code can execute later without blocking the execution of the next part of codes.

    if the previous code is stuck or taking too long then that specific part will get executed parallaly and the flow continues. the code doesn't wait for its previous code to complete the execution.

*/





// SET_TIME_OUT -


// a built in function used to delay some part of code, callback functions are used as argument becuz they can store some code and can be called later, the second argument given is a time delay in mili seconds - 1 second = 1000ms, 0.5 second = 500ms,    the function will be executed after the delay.          you can write a function inside it or used any pre-written function.

function fn () {
    console.log("sometexthere")
};

setTimeout(fn, 2000);

// this function delays the execution of the callback function given but this whole function returns a timerid, this id can be used inside another function called cleartimeout(timerID), this function cleartimeout stops the execution of the settimeout function and the callback function never gets executed.

// to access this timerID, store the settimeout function inside any variable and that variable will store the returned value which is the timerid

let timerid = setTimeout(() => {
    console.log("text")
}, 3000);

clearTimeout(timerid);

// this cleartimeout can be used to stop the execution in diff situations.





// SOME FACTS ABOUT FUNCTIONS -

// Parameter name matters while defining the function, Argument positions matters while calling the function.

// only functions take arguments, anything can be used as argument in js becuz all of them are just values for example - object - array - variable - string - num - etc

// function declaration () take argument, but when you use () with a function name after its declaration it counted as calling the function and that is executing the function

// functions return undefined until you use return in the function, return keyword returns only one value, that can be anything.





// CALLBACK FUNCTION - when a function is given as an argument to another function, then the function is called as a callback function

// HOW TO PASS CALLBACK FUNCTIONS WITH ARGUMENTS -


// PROBLEM STATEMENT EXPLAINED -

/*

    if there is a main function, and one callback function 
    
    the callback function is getting passed to the main function as an argument
    
    using () to give argument to the callback function while passing it to the main function - like this - main (callback(argument)),
    
    use of parenthesis () executes the function inside the argument of main function, then the main function take the returned value of callback function as an argument

    by default functions returns undefined, so now the main function got undefined as argument, not the actual callback function

    this makes the logical error in the code.

*/


// SOLUTIONS -
   
   // there are two types of callback functions - 1. works without argument 2. works with argument / Need argument


// 1. if using a function as callback function which does not require an argument then simply use the function name of pre-defined function or define the entire function when calling the function as argument.

   // ex.

function greet(){
    console.log("hello")
};

function main (example) {
    example();
};

main(greet);

// here the main function is taking greet as argument and calling the greet function. no need of argument in greet funtion.

main (() => {
    console.log("hello")
});

// here i defined a function inside the argument placeholder. this works too., this defined function is the argument taking place of the parameter example.



// 2. when the callback function needs argument - 


// the most common method to do this is to put it inside another function to pass as with an argument.


function main (callbackfn) {
    callbackfn();                  // this main function is just calling the callback function
};

function callback(value){
    console.log(value);           // this callback function is printing some value given as argument
};

main ( () => { callbackfn(10) } ) 

// i called the main function, inside the arguemnt i created an arrow function, then called the callback function with an argument (10) inside the arrow function, later the arrow function will be called inside the main function which will call the internal callbackfn.


// if you already know the argument and its fixed then it can be defined inside main function


function main (callbackfn) {
    callbackfn(123);                  // i already declared the argument here inside the main function, no need to give it when calling the main function becuz its already filled inside main function.
};

function callback(value){
    console.log(value);           // this callback function is printing some value given as argument
};

main(callback) // called the main function with callback function as argument, the value was pre-defined so the callback will print the value on console.



// define the function in the main function in such a way you can give the argument of callback function as the argument of main function.


   function main(callbackfn, arg) {    // set placeholders to pass a function and its value.
    callbackfn(arg);         // here i created a template which will call the function with its argument.
};

function callback(value) {
    console.log(value);     // simple function printin some value.
};

main(callback, value); // given the callback and value both which will fit into the the internal template function i created.
   

// THERE ARE MULTIPLE WAYS TO GIVE CALLBACK FUNCTION WITH ARGUMENT & ALSO WITHOUT THE ARGUMENT, MULTIPLE WAYS SERVING MULTIPLE PURPOUS.
   



// CALLBACK HELL -

/*
    
    Imagine a situation where you want multiple functions to be executed one after another in a strict sequence, if one fails then next processes should stop, but the functions are asynchoronous (ex. timeout used). then calling the next function in the previous one will be the solution in this case,

*/

// EXAMPLE -

// in this example im trying to print multiple values one after another in a sequence after the delay of 2 seconds

function val(value, callback){         // curr value to print as and callback function to print next value

    setTimeout(() => {             // a methods which works asynchronously
        console.log(value);
        if(callback){        // if checking if the next function exists or not ( callback function given or not )
        callback();     // each function is calling next function which is given as a callback to previous function
        };          
    }, 2000);       // 2 sec of delay
};

// here the i created a simple function which prints some value and used itself as a callback to print the values again n again, each time i gave a new value and used the function itself as a callback function.

val(1,() => {
    val(2, () => {
        val(3, () => {
            val(4, () => {    // this structure is called as pyramid of doom.
                val(5)
            })
        })
    })
})

// i created a function to print some values - i called the same function again and again - i wanted them to execute one after another so i gave the parameter to the function to call the next one inside it - called one function inside another as callback and did it again n again -

// this created a code structure which is difficult to understand and managable, poor readibility and complexity - THIS PROBLEM IS CALLED AS A CALLBACK HELL.

// to solve this problem - use - PROMISES





// PROMISES -

/*

    In synchronous operations, the tasks by default run after each othere, each task gives the result immidietly and the next task can be performed even if it depends on the result of the previous task.

    But some Task take uncertain amout of time, and the result is uncertin too, tasks like getting some data from an external database, the process will succeed or fail, also the result is not fixed. - these type of task are called asynchronous operation in javascript proramming ( javascript can be programmed in sync or async both ).

    In the Situation where the time taken to complete and the result both are not fixed, but there are two or more tasks, which depends on the result of the previous task, we need a placeholder / reference of the result to define the next task / operation which will be executed on the result, what will happen if the task is completed, what if it fails and gives error.

    the Promises are the object which represent the result of a task which will be completed eventually in the future but currently - no fixed result and outcome.

    the promises are special type of object, they take a callback function as parameters, inside the callback function you can define the task. to define how the task succeds of fails there are two parameter given to the callback function which can be used inside the callbakc fuction to define what counts as completed task or failed task.

*/

// COMPLETE SYNTAX EXAMPLE OF PROMISES -

let p = new Promise((resolve, reject) => {      // created new promise object with " new Promise "
    
    let userdata = {       // ( no actual external source here, so i created temp data )
        user: "asim",
        age : 22,
        Status : "Active"
    };

    if(userdata.user){            // checking if the userdata exists or not
        resolve(userdata.user);        // if exists then resolve (fulfill) the promise and pass value of the user name to then()
    } else {
        reject("user not found");     // if the user name dosent exist, then reject the promise and pass the value of reject to catch()
    }
});


// RESOLVE & REJECT -

/*
    
    1. resolve () this function is called when the task is completed, inside this function you can pass the value, which later be used as the result of the task. passing the result to then() internally, which is used to perform the next task which depends on the result using then().
    
    2. reject() this function is called when the task is rejected / failed, in this function you can pass the value which will be passted to catch(), reject() function mostly contain the error message, if the tasks fails and value passed to catch() function.

    Short definition: A Promise is a future result; resolve marks success, and reject marks failure.

*/


// THEN & CATCH - ( .then() and .catch() are the methods of promise object )

// THEN -

/* 
    then() method is used to execute some task after the promise if fulfilled.
    
    to perform some task after the complition, call then() with an argument, the argument will be the task which will be executed after the promise resolves.

    then() method expects a function as an argument, the function will store task which will be executed after the promise is fulfilled.
    (even tho ur calling the then()m the function inside it called internally with the value as argument after the promise is fulfilled.)

    the function inside then() will be called with a value, that value will be the one given to the resolve() in the promise.

    you can use that value, define it as parameter in your callbackfunction and use it inside like a normal parameter.

*/

// CATCH -

/*

    catch() method is used to execute some task after the promise is rejected.

    this works exactly like this, only in the sitaution when the promise is rejected and then reject() is called, reject pass value to catch(), when you know that the value will be passed, you can use that inside the callback function you will define inside catch() as an argument. - Things work same here, same as then() but for faliure.

*/

// Ex. -

p.then((result) => {
    console.log("Promise Fulfilled")
    console.log(result);
});


p.catch((error) => {
    console.log("Promise Rejected")
    console.log(error)
});




// PROMISE CHANING -


// when you want to execute one promise after a previous promise resolves, and u want to do this for multiple promises, forming a chain in which they execute one after another after the previous one is resolved.

// this can be also used when one promise depends on the data which only becomes available after another promise is resolved.

/* 
    IMAGINE A,B,C ARE PROMISES...

    when you want to create + execute the promise B only after the promise A resolves
    
    define the promise B inside this() of A. 
    
    this way the promise B only executes after the promise A is resolved,
    
    If you want to take one more step ahead, Define promise C inside the this() of promise B

*/

// Ex. -

function p1 () { 
    
  return new Promise((resolve, reject)=>{
    
    console.log("getting data 1...");
    
    setTimeout(() => {
        console.log("data: ", 123);
        resolve("done!")
    }, 5000);

});
};

function p2 () { 
    
   return new Promise((resolve, reject)=>{
    
    console.log("getting data 2...");
    
    setTimeout(() => {
        console.log("data: ", 456);
        resolve("done!")
    }, 5000);

});
};

function p3 () { 
    
    return new Promise((resolve, reject)=>{
    
    console.log("getting data 3...");
    
    setTimeout(() => {
        console.log("data: ", 789);
        resolve("done!")
    }, 5000);

});
};

let promise1 = p1();

promise1.then((result) => {
    console.log(result);

    let promise2 = p2();

    promise2.then((result) => {
        console.log(result);
        let promise3 = p3();
        promise3.then((result) => {
            console.log(result);
        });
    });
});

/*
NOW THESE THREE FUNCTIONS - 

1. CAN RUN ONE AFTER ANOTHER IN ORDER
2. CAN ONLY RUN AFTER PREVIOUS ONE RESOLVES
3. CAN USE THE DATA OF PREVIOUS RESOLVE OUTPUT IN NEXT ONE

*/

/* Extra_info -  

RETURN KEYWORD REVISED - im probably writing this again becuz in this example the return keyword is important, i defined the function which can create new promises when called using the return keyword and calling new promise object.

A function useually perform task, print things to console, but a function can not return values automatically, when return word used, it returns the value defined after it to the one who calls the function, if let x = function1(); here the function1 is called and its value is stored inside x. now x will not store the entire function, it will only store the value returned by the funciton, becuz here the function is executed, if it returns nothing then x will store nothing.

*/

/*
EXPLANATION OF THIS EXAMPLE IN BREIF -

    In this example, i first created 3 functions, in which i defined promise objects and also returned them,
    using that i called the first function first - that function created new promise and returned it,
    then i used it's then() method, inside this method i simple printed the result of the first promise after resolve.

    the next step was crucial - defning the next promise which should only be created after the first promise is resolved.

    i called the next function inside then() method of the first promise, then() method only executes its callback function after the promise is fulfilled.

    so when the first promise will be fullfilled, the callback function will execute and it will return a a promise which will be stored inside a variable, later used to create then() method of that promise, the next function will be called and the next promise will be created, it can also use the result of the first function as parameter. 

    then i used the variable which to access the second promise and used the then() method of the second function. did the same with 3rd one

    defined function - called inside second promise's then() method, the promis fullfilled - function executed, returned the promsie, stored inside variable - can be used to create new then() which will contain the next promise

    every next promise is getting created by using the function defined before, the promise fulfilled, functions executed, returned the promise, promises stored inside variable - used their then() method to create the whole chain.

*/

// BETTER WAY TO CALL CHAINED PROMISES

p1()
    .then((result) => {       // simple format but works same as p1().then

    console.log(result);
    return p2();

    })
    .then((result) => {

    console.log(result);     // in this example i made the callback function of this() method return the next promise itself by using return and next function call.
    return p3();
    
    })
    .then((result) => {

    console.log(result);
    // return nothing
    });


// ANOTEHR EASIEST AND SIMPLE WAY TO DO THE SAME THING 

// The functions are returning the promise objects, the promise object have the method then(), therefore, then() method can be used directly by using the reference of the function call.
// insted of calling the function and storing inside variable like  let promise1 = function1(); to use promise1.then(),   function1().then also works, this single line calls the function and it returns the object which refers to .this()

p1().then((result) => {
    console.log(result);

    p2().then((result) => {
        console.log(result);
    
        p3().then((result) => {
            console.log(result);       // This looks more cleaner and structured
    
        });
    
    });

});

// What is the next promise is returned by the then() method of previous promise ??




// ASYNC - AWAIT

/*

ASYNC

    Async functions is a function used to handle the asynchronous operations and their results using await, await can be only used inside a async function.

AWAIT

    await is used to pause the execution of the entire async function until the promise is settled, when the promise is settled then it executes the operation below it. 
    
    await also returns the result of a promise ( in both conditions - resolve or reject ) which was passed to then and catch before, now its passed to await.
    then use try catch to define operations for both cases

*/
// Example

let first = new Promise((resolve,reject) => {
    console.log("Promise 1 Started...");
    setTimeout(() => {
        console.log("Promise complete");            // defined first promise and it's started execution
        resolve("success");
    }, 2000);
});

let second = new Promise((resolve,reject) => {
    console.log("Promise 2 Started...");
    setTimeout(() => {
        console.log("Promise failed");          // defiend second promise and it's started execution
        reject("Process failed..");
    }, 2000);
});

async function fn (){                               // defined async function
    console.log("async function started");       // this line will print before promises settle, becuz written before any await so does not depend on any promise to settle
    try {                                        // used try block,
        let result = await first;                // await returning the result of first promise. when the promise is settled the await let the next lines execute.
        console.log(result);                     // print result if the promise succeeds
    } catch (error) {                            // catching if any error inside try, in this case, no.
        console.log(error);                      // prints error if there is any
    };

    try {                                        // another try catch block, executes only after the first await promise settled.
        let result = await second;               // await getting the result, but in this case the promise is rejected, try block skiped. ( read below for detailed explanation )
        console.log(result);                     // skipped
    } catch (error) {                            // await passes error and catch catches it.
        console.log(error);                      // prints error message
    };
};

fn();         // - executing the async function


// await represents the value returned by the promise, but error is also a value then why try treats it like an error in code when its just a result of promise ?
// becuz await creates a throw "error msg" whenever a promise get's rejected, then the value of await p1 becomes throw "error".
// throw is a keyword, actually a statement which creates an exception in the code.
// exception is not a bug but its a value that interprets the normal execution flow and passes the value to the nearest catch.


// NOW I WANT - THE NEXT FUNCTION IS EXECUTED ONLY AFTER THE PREVIOUS ONE IS RESOLVED ( i will store the promise in a function and call it inside try after await )

function getdata1 (data) {
    return new Promise ((resolve,reject) => {
        console.log("promise 1 started")
        setTimeout(() => {
            resolve("success");
        }, 2000);
    })
};

function getdata2 (data) {
    return new Promise ((resolve,reject) => {
        console.log("promise 2 started")
        setTimeout(() => {
            reject("failed");
        }, 2000);
    })
};

async function fn () {
    console.log("execution started...");

    try {

        let result = await getdata1(123);
        console.log("getdata1 resolved");
        console.log(result);
        
        let result2 = await getdata2(456);
        console.log("getdata2 resolved");
        console.log(result2);

    } catch (error) {

        console.log("getdata2 failed");
        console.log(error);
    };

    try {

        let result = await getdata2;
        console.log("getdata2 resolved");
        console.log(result);

    } catch (error) {
        
        console.log("getdata2 failed");
        console.log(error);
    };
};

fn();

/*

here's the output :

    execution started...
    
    promise 1 started
    
    {<pending>}
    
    getdata1 resolved
    
    success
    
    promise 2 started
    
    getdata2 failed
    
    failed

*/