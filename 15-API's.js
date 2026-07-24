// API ( APPLICATION PROGRAMMING INTERFACE )



// AN API is a interface ( pre-defined set of rules ) which allows two software systems or system components to interact with each othere, Exchange Data and functionalities & communicate by sending request and recieving data.

// AJAX - asynchronous javascript and xml - is a technique in web tech to get the data from the server without reloading the entire page, before this technique, updating the page was done by distroying old one and giving a new html page to user, but after the web api's came, the js could now access the netwokring system of the browser, the api's provided an interface to communicate with networking system, the api's were async, they work outside the js flow without blockng the entire flow, if they were sync, the api's request could freeze the entire web page until the request is finished (becuz the js is single threaded), but they work asynchronously without stopping the flow with the networking system, when the request is completed they respond to js. and the js can decide to updates only the specific part of web page with new data and the rest of the web page remains untouched.


/*
FETCH -

FETCH API

    The Fetch api provides an interface for fetching ( sending / receiving ) resouce ( data ).

# Extra_Info - ( how an fetch environment works ) - 
    ( The Fetch API is a collection of related objects, functions, methods, and classes that provides the capability to make HTTP requests and handle HTTP responses. )


FETCH FUNCTION

    The fetch function is used to fetch resouces ( data ).

    Fetch is a global built in function which is a part of fetch API used to send http request and retrieve resources from any http server.  fetch always returns a promise and the promise is fulfilled with a response object. resolve(response_obj); - returned response by the server.


REQUEST OBJECT

    A string containing URL can be passed to the fetch function with a optional argument to configure the request.
    but a Request object can also be passed to fetch function.


RESPONSE OBJECT

    This object represents the reponse returned by fetch after the promise is fulfilled, first the fetch returns a proimse but when the promise is fulfilled the resolve pass the result to .then or await. the result is the response object which contain returned resources, data, statues, etc which can be used for various purposes.

*/

// ex -

let promise = fetch("url"[option]);

// fetch sends a request object (even when u give a url it converts it into an object ), the request is called as GET Request

console.log(promise);

// this will print the promise as object, as you know fetch returns a promise, the response object will be returned to .then() or await of this promise.


// THE response object contain data in json format -

/*

JSON - Javascript object notation

    data is formatted like a javascript object
    
    multiple objects inside one object
    
    json file must have one root object
    
    everything must be key value pairs
    
    string should be inside double quotes
    
    can use primitives and arrays
    
    function not allowed.
   

Example of json -

{
    example1:"abc",
    example2:123,

    example3:{
        text:"hello",
        no:123,
    },
}

*/

// The data returned by the Fetch API is in the JSON format, to convert it into actual accessible JS object format use json methods.

// json method is a method of response object, it returns the data in js object format.

async function request() {
    let response = await fetch("url");    // fetch returns promise, await returns the resolve output, resolve contain the response obj, now its stored inside response variable
    let data = await response.json();    // .json method returns another promise which is resolved by the actual data in js obj format
    console.log(data);    
}

// JSON METHOD PROMISE & PARASING - .json() method parases the response object, the parasing needs time and it's not fixed, so json method returns an promise which later resolves with the output of json data parased into js object.